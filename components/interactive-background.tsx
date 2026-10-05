"use client";

import { useEffect, useRef } from "react";

// Utilidad para chequear si dos lneas se cruzan (algoritmo matemtico estndar)
function ccw(A: {x: number, y: number}, B: {x: number, y: number}, C: {x: number, y: number}) {
  return (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x);
}
function segmentsIntersect(
  A: {x: number, y: number}, B: {x: number, y: number}, 
  C: {x: number, y: number}, D: {x: number, y: number}
) {
  return ccw(A, C, D) !== ccw(B, C, D) && ccw(A, B, C) !== ccw(A, B, D);
}

class Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isBroken: boolean = false;
  
  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.isBroken) {
      this.vy += 0.15; // Gravedad cuando est roto
      
      // Si se cae de la pantalla, respawnea sano arriba o en un borde
      if (this.y > h + 50) {
        this.reset(w, h);
      }
    } else {
      // Rebotar en las paredes suavemente
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
  }

  reset(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = -20; // Aparece desde arriba
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = Math.random() * 0.5 + 0.2; // Cae lento y luego se estabiliza
    this.isBroken = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.isBroken ? "rgba(239, 68, 68, 0.5)" : "rgba(161, 161, 170, 0.5)"; // Rojo si se rompe, zinc tech si est sano
    ctx.fill();
  }
}

class DebrisLine {
  x1: number; y1: number;
  x2: number; y2: number;
  vx: number; vy: number;
  angularVelocity: number;
  life: number;
  maxLife: number;
  
  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1; this.y1 = y1;
    this.x2 = x2; this.y2 = y2;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = Math.random() * 2 + 1; // Salta un poquito o cae directo
    this.angularVelocity = (Math.random() - 0.5) * 0.1;
    this.maxLife = 100 + Math.random() * 50;
    this.life = this.maxLife;
  }

  update() {
    this.x1 += this.vx; this.x2 += this.vx;
    this.y1 += this.vy; this.y2 += this.vy;
    this.vy += 0.15; // Gravedad para los pedazos de lnea
    
    // Rotacin sobre s mismos
    const cx = (this.x1 + this.x2) / 2;
    const cy = (this.y1 + this.y2) / 2;
    const cosA = Math.cos(this.angularVelocity);
    const sinA = Math.sin(this.angularVelocity);
    
    const nx1 = cosA * (this.x1 - cx) - sinA * (this.y1 - cy) + cx;
    const ny1 = sinA * (this.x1 - cx) + cosA * (this.y1 - cy) + cy;
    const nx2 = cosA * (this.x2 - cx) - sinA * (this.y2 - cy) + cx;
    const ny2 = sinA * (this.x2 - cx) + cosA * (this.y2 - cy) + cy;
    
    this.x1 = nx1; this.y1 = ny1;
    this.x2 = nx2; this.y2 = ny2;
    
    this.life--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`; // Zinc o rojo. Rojo queda bien para "roto"
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let nodes: Node[] = [];
    let debris: DebrisLine[] = [];
    let animationFrameId: number;
    let prevMouse: {x: number, y: number} | null = null;
    
    const maxDistance = 150;
    const maxDistSq = maxDistance * maxDistance;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Mantenemos una densidad de nodos parecida segn el tamao de la pantalla
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      // Si hay ms espacio, agregamos; si no, dejamos los que estn
      while (nodes.length < nodeCount) {
        nodes.push(new Node(canvas.width, canvas.height));
      }
    };
    
    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar nodos y armar conexiones
      for(let i=0; i<nodes.length; i++) {
        const n1 = nodes[i];
        n1.update(canvas.width, canvas.height);
        n1.draw(ctx);
        
        // Si est sano, busca conectarse con otros sanos
        if (!n1.isBroken) {
          for(let j=i+1; j<nodes.length; j++) {
            const n2 = nodes[j];
            if (!n2.isBroken) {
              const dx = n1.x - n2.x;
              const dy = n1.y - n2.y;
              const distSq = dx*dx + dy*dy;
              
              if (distSq < maxDistSq) {
                const alpha = 1 - Math.sqrt(distSq) / maxDistance;
                ctx.beginPath();
                ctx.moveTo(n1.x, n1.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = `rgba(161, 161, 170, ${alpha * 0.4})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Dibujar y actualizar pedazos rotos (Debris)
      debris = debris.filter(d => d.life > 0);
      debris.forEach(d => {
        d.update();
        d.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    const handleMouseMove = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      
      if (prevMouse) {
        // "Cortar" como en Fruit Ninja:
        // Revisamos todas las conexiones actuales y si la lnea del mouse las cruza, se rompen.
        for(let i=0; i<nodes.length; i++) {
          const n1 = nodes[i];
          if (n1.isBroken) continue;
          
          for(let j=i+1; j<nodes.length; j++) {
            const n2 = nodes[j];
            if (n2.isBroken) continue;
            
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            if (dx*dx + dy*dy < maxDistSq) {
              const intersected = segmentsIntersect(
                prevMouse, {x: mx, y: my},
                {x: n1.x, y: n1.y}, {x: n2.x, y: n2.y}
              );
              
              if (intersected) {
                // Rompemos ambos nodos para que caigan
                n1.isBroken = true;
                n2.isBroken = true;
                // Spawneamos el pedazo de lnea para que se vea cmo cae al vaco
                debris.push(new DebrisLine(n1.x, n1.y, n2.x, n2.y));
              }
            }
          }
        }
      }
      
      prevMouse = { x: mx, y: my };
    };

    // Tambin podemos romper nodos haciendo click cerca de ellos
    const handleClick = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      nodes.forEach(n => {
        if (!n.isBroken) {
          const dx = n.x - mx;
          const dy = n.y - my;
          if (dx*dx + dy*dy < 10000) { // Radio de ~100px
             n.isBroken = true;
          }
        }
      });
    };

    // Para evitar que el mouse viejo corte la pantalla entera si salimos de la ventana
    const handleMouseLeave = () => {
      prevMouse = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

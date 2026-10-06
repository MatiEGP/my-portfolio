"use client";

import { useEffect, useRef } from "react";

// Distancia cuadrada de un punto a un segmento (rpido y eficiente)
function distanceToSegmentSq(p: {x: number, y: number}, v: {x: number, y: number}, w: {x: number, y: number}) {
  const l2 = (w.x - v.x)*(w.x - v.x) + (w.y - v.y)*(w.y - v.y);
  if (l2 === 0) return (p.x - v.x)*(p.x - v.x) + (p.y - v.y)*(p.y - v.y);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  const projX = v.x + t * (w.x - v.x);
  const projY = v.y + t * (w.y - v.y);
  return (p.x - projX)*(p.x - projX) + (p.y - projY)*(p.y - projY);
}

class Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  color: string;
  size: number;

  constructor(x: number, y: number) {
    this.x = x; this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 2; // Explosin rpida
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.maxLife = 30 + Math.random() * 40;
    this.life = this.maxLife;
    // Colores del glow border
    const colors = ["#E2CBFF", "#393BB2", "#8b5cf6", "#ffffff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.size = Math.random() * 3 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05; // Gravedad muy suave para las chispas
    this.vx *= 0.92; // Friccin
    this.vy *= 0.92;
    this.life--;
    this.size *= 0.95;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
    
    // Glow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0; // reset para no afectar otras cosas
  }
}

class Node {
  x: number; y: number;
  vx: number; vy: number;
  isBroken: boolean = false;
  color: string = "rgba(161, 161, 170, 0.5)"; // zinc-400
  
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
      this.vy += 0.15; // Gravedad
      
      if (this.y > h + 50) {
        this.reset(w, h);
      }
    } else {
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
  }

  break() {
    this.isBroken = true;
    this.color = Math.random() > 0.5 ? "#E2CBFF" : "#393BB2"; // Toman el color del glow
  }

  reset(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = -20; 
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = Math.random() * 0.5 + 0.2; 
    this.isBroken = false;
    this.color = "rgba(161, 161, 170, 0.5)";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    if (this.isBroken) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
    }
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

class DebrisLine {
  x1: number; y1: number;
  x2: number; y2: number;
  vx: number; vy: number;
  angularVelocity: number;
  life: number; maxLife: number;
  color: string;
  
  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1; this.y1 = y1;
    this.x2 = x2; this.y2 = y2;
    this.vx = (Math.random() - 0.5) * 4; // Explota un poco ms fuerte
    this.vy = (Math.random() - 0.5) * 4;
    this.angularVelocity = (Math.random() - 0.5) * 0.2;
    this.maxLife = 100 + Math.random() * 50;
    this.life = this.maxLife;
    this.color = Math.random() > 0.5 ? "#E2CBFF" : "#393BB2";
  }

  update() {
    this.x1 += this.vx; this.x2 += this.vx;
    this.y1 += this.vy; this.y2 += this.vy;
    this.vy += 0.15; 
    
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
    ctx.strokeStyle = this.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.stroke();
    ctx.shadowBlur = 0;
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
    let sparks: Spark[] = [];
    let animationFrameId: number;
    
    const maxDistance = 150;
    const maxDistSq = maxDistance * maxDistance;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      while (nodes.length < nodeCount) {
        nodes.push(new Node(canvas.width, canvas.height));
      }
    };
    
    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for(let i=0; i<nodes.length; i++) {
        const n1 = nodes[i];
        n1.update(canvas.width, canvas.height);
        n1.draw(ctx);
        
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

      debris = debris.filter(d => d.life > 0);
      debris.forEach(d => { d.update(); d.draw(ctx); });

      sparks = sparks.filter(s => s.life > 0 && s.size > 0.1);
      sparks.forEach(s => { s.update(); s.draw(ctx); });

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    const handleClick = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      const clickRadiusSq = 400; // 20px de radio de hitbox para las lneas
      
      // Buscar conexiones afectadas
      for(let i=0; i<nodes.length; i++) {
        const n1 = nodes[i];
        if (n1.isBroken) continue;
        
        for(let j=i+1; j<nodes.length; j++) {
          const n2 = nodes[j];
          if (n2.isBroken) continue;
          
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          if (dx*dx + dy*dy < maxDistSq) {
            // Si el click est cerca del segmento de la lnea
            if (distanceToSegmentSq({x: mx, y: my}, {x: n1.x, y: n1.y}, {x: n2.x, y: n2.y}) < clickRadiusSq) {
              
              // Rompemos la conexin y los nodos
              n1.break();
              n2.break();
              
              debris.push(new DebrisLine(n1.x, n1.y, n2.x, n2.y));
              
              // Spawneamos chispas en el punto de click
              for(let s = 0; s < 15; s++) {
                sparks.push(new Spark(mx, my));
              }
            }
          }
        }
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
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

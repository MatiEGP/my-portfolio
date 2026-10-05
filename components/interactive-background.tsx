"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;

  constructor(x: number, y: number, isExplosion: boolean = false) {
    this.x = x;
    this.y = y;
    // Explosion scatters particles everywhere, trail drops them slowly
    this.vx = isExplosion ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2;
    this.vy = isExplosion ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2 + 1; // Un poco de gravedad natural
    this.maxLife = isExplosion ? 60 + Math.random() * 40 : 30 + Math.random() * 20;
    this.life = this.maxLife;
    
    // Paleta de colores vibrante (Primary, violetas, rosas, azules)
    const colors = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981", "#f59e0b"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.size = isExplosion ? Math.random() * 6 + 2 : Math.random() * 4 + 2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // Gravedad muy sutil
    this.vy += 0.05;
    
    // Friccin para que frenen suavemente
    this.vx *= 0.98;
    this.vy *= 0.98;

    this.life--;
    // Se achican a medida que mueren
    this.size *= 0.96;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Alfa dependiendo de la vida restante
    const alpha = Math.max(0, this.life / this.maxLife);
    ctx.fillStyle = `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
    ctx.fill();
  }
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Filtramos las que se murieron o estn muy chicas
      particles = particles.filter(p => p.life > 0 && p.size > 0.1);
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    const handleMouseMove = (e: MouseEvent) => {
      // Dejamos un rastro al mover el mouse
      if (Math.random() > 0.4) { // No spawnea en CADA pixel, optimiza un poco
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Explosin divertida al clickear
      for (let i = 0; i < 25; i++) {
        particles.push(new Particle(e.clientX, e.clientY, true));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
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

"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Cargamos solo la versión slim. Cuidando el bundle size como campeones.
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10" // Fundamental para que quede de fondo
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 40, density: { enable: true, width: 800 } },
          color: { value: "#a1a1aa" }, // Zinc sutil
          links: { enable: true, color: "#a1a1aa", distance: 150, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 0.8 },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: 0.4 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // Se conectan a tu cursor al pasar
            onClick: { enable: true, mode: "push" }, // Genera 3 nodos nuevos al clickear
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
      }}
    />
  );
};

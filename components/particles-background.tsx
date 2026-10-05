"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Cargamos solo la versión slim. Cuidando el bundle size como campeones.
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
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

"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // Usamos slim para cargar solo lo esencial y optimizar el uso de CPU
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60, // Limitamos los FPS para no sobrecargar el navegador
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse", // Hace que reboten/se alejen con el click
            },
            onHover: {
              enable: true,
              mode: "grab", // Conecta las líneas cuando el cursor pasa cerca
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#a1a1aa", // Un gris sobrio estilo tech
          },
          links: {
            color: "#a1a1aa",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Que reboten en los bordes de la pantalla
            },
            random: false,
            speed: 0.8, // Movimiento constante y suave
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 40, // Mantenemos la cantidad baja para no matar la CPU
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

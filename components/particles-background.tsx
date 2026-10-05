"use client";
import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 40, density: { enable: true, width: 800 } },
            color: { value: "#a1a1aa" },
            links: { enable: true, color: "#a1a1aa", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.8 },
            size: { value: { min: 1, max: 2 } },
            opacity: { value: 0.4 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 3 },
            },
          },
        }}
      />
    </ParticlesProvider>
  );
};

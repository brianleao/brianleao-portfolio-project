"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const technologies = [
    { id: 1, name: "React.js" },
    { id: 2, name: "Next.js" },
    { id: 3, name: "Tailwind CSS" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "JavaScript" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "Scrum" },
    { id: 8, name: "PostgreSQL" },
    { id: 9, name: "Kanban" },
    { id: 10, name: "Figma" },
  ];

  const duplicated = [...technologies, ...technologies];
  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useRef(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!paused && containerRef.current) {
      baseX.current -= delta * 0.05;

      const containerWidth = containerRef.current.scrollWidth / 2;
      if (baseX.current <= -containerWidth) {
        baseX.current = 0;
      }

      containerRef.current.style.transform = `translate3d(${baseX.current}px, 0, 0)`;
    }
  });

  return (
    <section id="about" className="scroll-mt-10 px-4">
      <h2 className="font-bold text-[clamp(2.5rem,2.5vw,3rem)] text-center mb-8">Sobre mim</h2>

      <div className="flex justify-center">
        <p className="text-lg text-center max-w-5xl mb-16">
          Tenho 24 anos, moro em Pinhais-PR, região metropolitana de Curitiba.
          Atualmente curso Bacharelado em Sistemas de Informação na Universidade
          Tecnológica Federal do Paraná. Sou apaixonado por desenvolvimento web e
          gosto de estar por dentro das melhores tecnologias do mercado e me
          capacitando cada dia mais para conseguir elaborar e construir soluções
          que ofereçam uma experiência agradável ao usuário. No meu tempo livre
          gosto de estar com a minha namorada, viajar e acompanhar os jogos do
          meu time de futebol, o Club Athletico Paranaense.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#1E1E1E] text-[#98FF00] px-6 py-3 rounded-full font-bold text-center text-sm sm:text-base max-w-full">
          Tecnologias e metodologias que utilizo
        </div>
      </div>

      <div
        className="relative overflow-hidden w-full mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={containerRef}
          className="flex gap-6 whitespace-nowrap will-change-transform"
          style={{
            minWidth: "200%", // Garante que ele ocupe mais do que a largura da tela pra loop infinito
          }}
        >
          {duplicated.map((tech, index) => (
            <div
              key={index}
              className="bg-[#191919] text-white font-bold py-4 px-6 rounded-lg text-sm sm:text-base shrink-0"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

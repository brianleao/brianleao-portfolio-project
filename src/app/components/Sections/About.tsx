"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const technologies = [
    "React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "Scrum", "SQL", "Kanban", "Figma", "Spring Boot", "Java", "JPA", "Hibernate"
  ];

  const triplicated = [...technologies, ...technologies, ...technologies];

  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useRef(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!paused && containerRef.current) {
      baseX.current -= delta * 0.05;

      const containerWidth = containerRef.current.scrollWidth / 3;
      if (Math.abs(baseX.current) >= containerWidth) {
        baseX.current = 0;
      }

      containerRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <section id="about" className="scroll-mt-10">
      <h2 className="font-bold text-[clamp(2.5rem,2.5vw,3rem)] text-center mb-[1rem] lg-[2.6875rem] mt-[3rem]">
        Sobre mim
      </h2>

      <div className="w-full flex justify-center max-w-5xl mx-auto">
        <p className="text-[18px] text-center mb-[4.125rem] mx-[2rem] leading-[2] text-[#818184]">
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
        <div className="bg-[#1E1E1E] text-[#98FF00] mx-[1rem] py-[1rem] px-[1.4375rem] sm:px-[3rem] font-bold rounded-[2.5rem] sm:mt-[5rem]">
          <h3 className="text-[clamp(0.8rem,1.4vw,4rem)] sm:text-[clamp(1rem,1.5vw,1rem)]">
            Tecnologias e metodologias que utilizo
          </h3>
        </div>
      </div>

      <div
        className="overflow-hidden w-full mt-[4rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={containerRef}
          className="flex gap-[1.5rem] whitespace-nowrap w-max will-change-transform"
        >
          {triplicated.map((tech, index) => (
            <div
              key={index}
              className="bg-[#191919] font-bold py-4 px-5 rounded-[0.625rem] text-[clamp(0.7rem,0.9vw,1.2rem)]"
            >
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

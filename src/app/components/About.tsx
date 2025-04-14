"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    {id: 9, name: "Kanban"},
    {id: 10, name: "Figma"},
  ];

  const duplicated = [...technologies, ...technologies];
  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useRef(0);

  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!paused && mounted && containerRef.current) {
      baseX.current -= delta * 0.05;
      const containerWidth = containerRef.current.offsetWidth / 2;
      if (baseX.current <= -containerWidth) {
        baseX.current = 0;
      }
      containerRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <section id="about" className="scroll-mt-10">
      <h2 className="font-bold text-[clamp(2.5rem,3vw,3rem)] text-center mb-[1rem] lg-[2.6875rem]">Sobre mim</h2>

      <div className="w-full flex justify-center">
        <p className="text-[18px] text-center mx-[2.4375rem] lg:mx-40 mb-[4.125rem] max-w-7xl">
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

      <div className="flex">
        <div className="bg-[#1E1E1E] text-[#98FF00] w-max mx-auto py-[1rem] px-[1.4375rem] sm:px-[3rem] font-bold rounded-[2.5rem] sm:mt-[5rem]">
          <h3 className="text-[clamp(0.9rem,1.5vw,4rem)] sm:text-[clamp(1rem,1.5vw,1rem)]">Tecnologias e metodologias que utilizo</h3>
        </div>
      </div>

      <div
        className="overflow-hidden w-full mt-[4rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={containerRef} className="flex gap-[1.5rem] whitespace-nowrap w-max">
          
          {duplicated.map((tech, index) => (
            <div key={index} className="bg-[#191919] font-bold py-4 px-5 rounded-[0.625rem] text-[clamp(0.8rem,1vw,1.2rem)]">
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

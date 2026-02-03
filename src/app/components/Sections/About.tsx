"use client";

import { useAnimationFrame, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const technologies = [
    "React.js", "Next.js", "Node.js", "Docker", "Kubernetes", "Tailwind CSS", "TypeScript", "JavaScript", "Scrum", "SQL", "Kanban", "Figma", "Spring Boot", "Java", "JPA", "Hibernate", "PostgreSQL"
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
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-[clamp(2.5rem,2.5vw,3rem)] text-center mb-[1rem] lg-[2.6875rem] mt-[3rem]"
      >
        Sobre mim
      </motion.h2>

      <div className="w-full flex justify-center max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[18px] text-center mb-[4.125rem] mx-[2rem] leading-[2] text-[#818184]"
        >
          Tenho 25 anos, moro em Pinhais-PR, região metropolitana de Curitiba.
          Atualmente curso Bacharelado em Sistemas de Informação na Universidade
          Tecnológica Federal do Paraná e sou Desenvolvedor Full Stack na Letalk. 
          Sou apaixonado por desenvolvimento web e gosto de estar por dentro das 
          melhores tecnologias do mercado e me capacitando cada dia mais para conseguir 
          elaborar e construir soluções que ofereçam uma experiência agradável ao usuário. 
          No meu tempo livre gosto de fazer musculação, viajar e acompanhar os 
          jogos do meu time de futebol, o Club Athletico Paranaense.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <div className="bg-[#1E1E1E] mx-[1rem] py-[1rem] px-[1.4375rem] sm:px-[3rem] font-bold rounded-[2.5rem] sm:mt-[5rem]" style={{ color: '#71AA1D' }}>
          <h3 className="text-[clamp(0.8rem,1.4vw,4rem)] sm:text-[clamp(1rem,1.5vw,1rem)]">
            Tecnologias e metodologias que utilizo
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
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
      </motion.div>
    </section>
  );
}



"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Experience() {

    const experiences = [
        
        {id: 1, position: "Desenvolvedor Full Stack", enterprise: "Letalk", location: "Belo Horizonte, Minas Gerais, Brasil", model: "Remoto", contract: "Autônomo", init: "Agosto de 2025", end:"Atual", responsibilities:"Atuo como Desenvolvedor Full Stack na Letalk, onde participo de todo o ciclo de vida do software, desde a concepção até a entrega. No dia a dia, codifico novas funcionalidades e realizo manutenções utilizando Node.js e React.js com TypeScript, sempre com foco em boas práticas. Meu fluxo de trabalho é otimizado pelo uso de Docker e Kubernetes para replicar o ambiente da aplicação em desenvolvimento, o que facilita os testes e a integração. Sou responsável por versionar e publicar as novas versões, gerenciando os deploys em produção."},
        {id: 2, position: "Desenvolvedor Full Stack", enterprise: "Compass UOL", location: "Porto Alegre, Rio Grande do Sul, Brasil", model: "Remoto", contract: "Estágio", init: "Maio de 2025", end:"Outubro de 2025", responsibilities:"Atuei como Desenvolvedor Full Stack integrando um time de alta performance com foco em desenvolvimento de soluções escaláveis e modernas. Trabalhei com tecnologias como React.js no front-end e Spring Boot com Java no back-end, participando ativamente de todas as etapas do ciclo de desenvolvimento de software. Estive inserido em um ambiente dinâmico com ênfase em aprendizado contínuo e aplicação prática de tecnologias de ponta, seguindo princípios de entregas ágeis com Scrum. Além disso, colaborei em projetos em grupo com foco em desenvolver aplicações completas, priorizando boas práticas de engenharia de software, integração contínua e qualidade de código."},
        {id: 3, position: "Analista de Suporte Pleno", enterprise: "Letalk", location: "Belo Horizonte, Minas Gerais, Brasil",model: "Remoto", contract: "Autônomo", init: "Maio de 2024", end:"Agosto de 2025", responsibilities: "Atuei no suporte ao cliente com foco na análise de problemas técnicos, gerenciamento de tickets em conjunto com o time de T.I, construção de chatbots, integrações com plataformas via webhook, além da criação e publicação de artigos. Também fui responsável pela criação e controle de processos envolvendo tickets e ritos de cunho técnico no Suporte, com o objetivo de manter a equipe alinhada na resolução de problemas. As principais tecnologias com as quais trabalhei incluem: Scrum, ActiveCampaign, RD Station, Make, Letalk, Pluga, Notion e Postman."},
        {id: 4, position: "Estagiário em Suporte e Infraestrutura", enterprise: "Vaccinar Nutrição Animal", location: "Pinhais, Paraná, Brasil", model: "Presencial", contract: "Estágio", init:"Agosto de 2022", end: "Abril de 2024", responsibilities:"Atuei com manutenção de hardware de computadores, instalação e configuração de programas, suporte ao cliente, abertura, tratamento e fechamento de chamados, gerenciamento de ativos de T.I, criação e controle de acesso de usuários, monitoramento de rede e servidores. As principais tecnologias que trabalhei nesta oportunidade foram: Windows, Grafana, Sophos, Protheus, Azure, Active Directory e Office 365."},
    ]

    return(
        <section id="experiences" className="scroll-mt-5 max-w-5xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-[clamp(2.5rem,2.5vw,3rem)] mt-[5rem]"
            >
                Experiências
            </motion.h2>
            <div className="flex gap-4 flex-wrap justify-center mt-[2rem] mx-[2rem]">
                {
                    experiences.map((experience, index) => (
                        <motion.div 
                            key={experience.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.1 * index,
                                ease: "easeOut"
                            }}
                        >
                            <div className="bg-[#131313] experience-card flex flex-col gap-[1rem] px-[2rem] py-[1.5rem] rounded-[1.25rem] border-[0.625rem] border-[#161616] font-normal text-[clamp(1rem,1vw,1.2rem)]"
                            >
                                <span className="font-bold text-greenPantano" style={{ color: '#71AA1D' }}>{experience.position}</span>
                                <p className="font-light"><span className="font-medium">{experience.enterprise}</span> • {experience.contract}</p>
                                <span className="font-bold">{experience.init} - {experience.end}</span>
                                <p>{experience.location} • <span className="font-light">{experience.model}</span></p>
                                <p className="text-justify">{experience.responsibilities}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}
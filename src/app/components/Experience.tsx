

export default function Experience() {

    const experiences = [
        {id: 1, position: "Analista de Suporte Pleno", enterprise: "Letalk", model: "Remoto", init: "Maio de 2024", end:"Atual", responsibilities: "Atualmente, atuo no suporte ao cliente com foco na análise de problemas técnicos, gerenciamento de tickets em conjunto com o time de T.I, construção de chatbots, integrações com plataformas via webhook, além da criação e publicação de artigos. Também sou responsável pela criação e controle de processos envolvendo tickets e ritos de cunho técnico no Suporte, com o objetivo de manter a equipe alinhada na resolução de problemas. As principais tecnologias com as quais trabalho incluem: Scrum, ActiveCampaign, RD Station, Make, Letalk, Pluga, Notion e Postman."},
        {id: 2, position: "Estagiário em Suporte e Infraestrutura", enterprise: "Vaccinar Nutrição Animal", model: "Presencial", init:"Agosto de 2022", end: "Abril de 2024", responsibilities:"Atuei com manutenção de hardware de computadores, instalação e configuração de programas, suporte ao cliente, abertura, tratamento e fechamento de chamados, gerenciamento de ativos de T.I, criação e controle de acesso de usuários, monitoramento de rede e servidores. As principais tecnologias que trabalhei nesta oportunidade foram: Windows, Grafana, Sophos, Protheus, Azure, Active Directory e Office 365."},
    ]

    return(
        <section id="experiences" className="scroll-mt-5">
            <h2 className="text-center font-bold text-[clamp(2.5rem,3vw,3.75rem)] mt-[10rem]">Experiências</h2>
            <div className="flex gap-4 flex-wrap justify-center mt-[2.69rem] mx-[1rem] sm:mx-[2rem]">
                {
                    experiences.map((experience) => (
                        <div key={experience.id}>
                            <div className="bg-[#131313] flex flex-col gap-[1rem] px-[2rem] py-[1rem] rounded-[1.25rem] border-[0.625rem] border-[#161616] font-normal text-[clamp(1rem,1.2vw,4rem)]">
                                <span className="font-bold">{experience.position}</span>
                                <span className="font-light">{experience.enterprise} - {experience.model}</span>
                                <span className="font-bold">{experience.init} - {experience.end}</span>
                                <p className="text-justify">{experience.responsibilities}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
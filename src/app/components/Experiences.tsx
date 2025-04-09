

export default function Experiences() {

    const experiences = [
        {id: 1, cargo: "Analista de Suporte Pleno", empresa: "Letalk", modelo: "Remoto", inicio: "Maio de 2024", fim:"Atual", responsabilidades: "Nessa experiência atual trabalho suporte ao cliente com ênfase na análise de problemas técnicos, gerenciamento de tickets junto ao time de T.I, criação de chatbot, integração com plataformas de CRM via webhook, criação e publicação de artigos, criação e controle de processos de rotinas no Suporte visando garantir o alinhamento do restante da equipe no que tange resolução de problemas. As principais tecnologias que trabalho são: Scrum, Active Campaign, RD Station, Make Integrations, Letalk, Pluga, Notion e Postman."},
        {id: 2, cargo: "Estagiário em Suporte e Infraestrutura", empresa: "Vaccinar Nutrição Animal", modelo: "Presencial", inicio:"Agosto de 2022", fim: "Abril de 2024", responsabilidades:"Atuei com manutenção de hardware de computadores, instalação e configuração de programas, suporte ao cliente, abertura, tratamento e fechamento de chamados, gerenciamento de ativos de T.I, criação e controle de acesso de usuários, monitoramento de rede e servidores. As principais tecnologias que trabalhei nesta oportunidade são: Windows, Grafana, Sophos, Protheus, Azure, Active Directory e Office 365."},
    ]

    return(
        <div>
            <h1 className="text-center font-bold text-[clamp(2rem,4vw,3.75rem)] mt-[10rem]">Experiências</h1>
            <div className="flex gap-4 flex-wrap justify-center mt-[2.69rem] mx-[1rem] sm:mx-[2rem]">
                {
                    experiences.map((experience) => (
                        <div key={experience.id}>
                            <div className="bg-[#131313] flex flex-col gap-[1rem] px-[2rem] py-[1rem] rounded-[1.25rem] border-[0.625rem] border-[#161616] font-normal text-[clamp(1rem,1.5vw,4rem)]">
                                <span className="font-bold">{experience.cargo}</span>
                                <span className="font-light">{experience.empresa} - {experience.modelo}</span>
                                <span className="font-bold">{experience.inicio} - {experience.fim}</span>
                                <p className="text-justify">{experience.responsabilidades}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
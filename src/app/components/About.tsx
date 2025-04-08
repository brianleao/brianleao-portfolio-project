
export default function About() {

    const technologies = [
        {id:1, name: "React.js"},
        {id:2, name: "Next.js"},
        {id:3, name: "Tailwind CSS"},
        {id:4, name: "TypeScript"},
        {id:5, name: "JavaScript"},
        {id:6, name: "Node.js"},
        {id:7, name: "Scrum"},
        {id:8, name: "PostgreSQL"}
    ]


    return(
        <div>
            <h1 className="font-bold text-[clamp(2.5rem,6vw,3.75rem)] text-center mt-20 mb-[1rem] lg-[2.6875rem]">Sobre mim</h1>
            <p className="text-[clamp(1.1rem,2vw,1.2rem)] text-justify mx-[2.4375rem] lg:mx-40 mb-[4.125rem]">
            Tenho 24 anos, moro em Pinhais-PR, região metropolitana de Curitiba. Atualmente curso Bacharelado em Sistemas de Informação na Universidade Tecnológica Federal do Paraná. Sou apaixonado por desenvolvimento web e gosto de estar por dentro das melhores tecnologias do mercado e me capacitando cada dia mais para conseguir elaborar e construir soluções que ofereçam uma experiência agradável ao usuário. No meu tempo livre gosto de estar com a minha namorada, viajar e acompanhar os jogos do meu time de futebol, o Club Athletico Paranaense.
            </p>

            <div className="bg-[#1E1E1E] text-[#98FF00] w-max mx-auto py-[1rem] px-[3.4375rem] font-bold rounded-[2.5rem]">
                <span>Principais tecnoligas que utilizo</span>
            </div>

            <ul className="flex gap-[3.5rem] mt-[4rem] w-full">
                {technologies.map( technology => (
                    <li key={technology.id} className="bg-[#191919] mx-auto font-bold py-4 px-5 rounded-[0.625rem] text-[clamp(0.5rem,1vw,1rem)]">
                        <span>{technology.name}</span>
                    </li>
            ))}
            </ul>

        </div>
    )
}
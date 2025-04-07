"use client"

export default function Header() {

    const headerOptions = [
        { id: 1, name: "Experiências", link: "/#experiences" },
        { id: 2, name: "Sobre", link: "/#about" },
        { id: 3, name: "Contato", link: "/#contact" }
    ]
    
    return (
        <header className="flex items-center justify-between ml-[3.75rem] mr-[3.75rem] mt-[1.68rem] cursor-pointer">

            <span className="text-[2.5rem] font-bold text-greenPantano text-shadow-extern">BL</span>
            
                <ul className="flex gap-[3.375rem]">
                    {headerOptions.map((option) => (
                        <li key={option.id}>
                            <a href={option.link} className="text-[1.25rem] hover:text-greenPantano duration-400">
                                {option.name}
                            </a>
                        </li>
                    ))}
                </ul>
        </header>
    )
}
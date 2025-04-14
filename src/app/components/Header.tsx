"use client"
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const headerOptions = [
    { id: 1, name: "Sobre", link: "/#about" },
    { id: 2, name: "Contatos", link: "/#contact" },
    { id: 3, name: "Experiências", link: "/#experiences" }
  ]

  return (
    <>
      <header className="flex items-center justify-between py-[2rem] px-[2rem] relative z-50 max-w-6xl mx-auto">
        <a className=" text-[clamp(2.5rem,3vw,4rem)] font-bold text-greenPantano text-shadow-extern" href="#">BL</a>

        <ul className="hidden md:flex gap-[3.375rem]">
          {headerOptions.map(option => (
            <li key={option.id}>
              <a
                href={option.link}
                className=" text-[20px] hover:text-greenPantano duration-300"
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-greenPantano z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={48} weight="bold" color="white" /> : <List size={48} weight="bold" color="white" />}
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-90
          flex flex-col items-center justify-center gap-10
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"}
          z-40
        `}
      >
        {headerOptions.map(option => (
          <a
            key={option.id}
            href={option.link}
            className="text-white text-2xl font-semibold hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {option.name}
          </a>
        ))}
      </div>
    </>
  )
}

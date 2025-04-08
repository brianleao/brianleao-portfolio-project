"use client"
import { List, X } from "@phosphor-icons/react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const headerOptions = [
    { id: 1, name: "Experiências", link: "/#experiences" },
    { id: 2, name: "Sobre", link: "/#about" },
    { id: 3, name: "Contato", link: "/#contact" }
  ]

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-[3.75rem] py-[1.68rem] relative z-50">
        <span className="text-[2.5rem] font-bold text-greenPantano text-shadow-extern">BL</span>

        <ul className="hidden md:flex gap-[3.375rem]">
          {headerOptions.map(option => (
            <li key={option.id}>
              <a
                href={option.link}
                className="text-[1.25rem] hover:text-greenPantano duration-300"
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
            className="text-white text-3xl font-semibold hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            {option.name}
          </a>
        ))}
      </div>
    </>
  )
}

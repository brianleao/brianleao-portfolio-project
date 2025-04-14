import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoGithub, IoMailOpen, IoLogoInstagram } from "react-icons/io5"

export default function Contact() {

    const socialMedias = [
        { id: 1, social: "LinkedIn", link: "https://www.linkedin.com/in/brianleao/", icon: <IoLogoLinkedin className="text-[#0B65C2] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 2, social: "WhatsApp", link: "https://wa.me/5541997447795", icon: <IoLogoWhatsapp className="text-[#25D366] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 3, social: "GitHub", link: "https://www.github.com/brianleao/", icon: <IoLogoGithub className="text-[#2b2b2b] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 4, social: "E-mail", link: "mailto:brianleao@icloud.com", icon: <IoMailOpen className="text-[#EA4335] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 5, social: "Instagram", link: "https://www.instagram.com/brianleao/", icon: <IoLogoInstagram className="text-[#E1306C] text-[clamp(2rem,3vw,4rem)]" /> },
    ]

    return (
        <section id="contact" className="scroll-mt-6 max-w-5xl mx-auto">
            <h2 className="text-center font-bold text-[clamp(2.5rem,3vw,3rem)] mt-[5rem]">Contatos</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] justify-items-center mt-[1.69rem] gap-[1rem] mx-[2rem]">
                {socialMedias.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full aspect-square bg-[#131313] flex flex-col items-center justify-center gap-[0.75rem] rounded-[1rem] border-[0.25rem] border-[#161616] text-[clamp(1rem,1vw,1.5rem)] hover:bg-[#1b1b1b] transition-all duration-300 text-center"
                    >
                        {social.icon}
                        {social.social}
                    </a>
                ))}
            </div>
        </section>
    )
}

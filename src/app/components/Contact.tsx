import { LinkedinLogo, WhatsappLogo, GithubLogo, EnvelopeSimple, InstagramLogo } from "@phosphor-icons/react"

export default function Contact() {

    const socialMedias = [
        { id: 1, social: "LinkedIn", link: "https://www.linkedin.com/in/brianleao/", icon: <LinkedinLogo weight="regular" className="text-[#0B65C2] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 2, social: "WhatsApp", link: "https://wa.me/5541997447795", icon: <WhatsappLogo weight="regular" className="text-[#25D366] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 3, social: "GitHub", link: "https://www.github.com/brianleao/", icon: <GithubLogo weight="fill" className="text-[#2b2b2b] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 4, social: "E-mail", link: "mailto:brianleao@icloud.com", icon: <EnvelopeSimple weight="regular" className="text-[#EA4335] text-[clamp(2rem,3vw,4rem)]" /> },
        { id: 5, social: "Instagram", link: "https://www.instagram.com/brianleao/", icon: <InstagramLogo weight="regular" className="text-[#E1306C] text-[clamp(2rem,3vw,4rem)]" /> },
    ]

    return (
        <section id="contact" className="scroll-mt-6">
            <h2 className="text-center font-bold text-[clamp(2rem,4vw,3.75rem)] mt-[10rem]">Contatos</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] justify-items-center mt-[5.69rem] mx-[1rem] gap-[1.5rem]">
                {socialMedias.map((social) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full aspect-square bg-[#131313] flex flex-col items-center justify-center gap-[0.75rem] rounded-[1rem] border-[0.25rem] border-[#161616] text-[clamp(1rem,1.5vw,3rem)] hover:bg-[#1b1b1b] transition-all duration-300 text-center"
                    >
                        {social.icon}
                        <span>{social.social}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

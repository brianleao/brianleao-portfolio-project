 import { LinkedinLogo, WhatsappLogo, GithubLogo, EnvelopeSimple, InstagramLogo } from "@phosphor-icons/react"

 export default function Contact() {

    const socialMedias = [
        {id: 1, social: "LinkedIn", link: "https://www.linkedin.com/in/brianleao/", icon: <LinkedinLogo size={32} weight="regular" className="text-[#0B65C2]"/>},
        {id: 2, social: "WhatsApp", link: "https://wa.me/5541997447795", icon: <WhatsappLogo size={32} weight="regular" className="text-[#25D366]"/>},
        {id: 3, social: "GitHub", link: "https://www.github.com/brianleao/", icon: <GithubLogo size={32} weight="fill" className="text-[#2b2b2b]"/>},
        {id: 4, social: "E-mail", link: "mailto:brianleao@icloud.com", icon: <EnvelopeSimple size={32} weight="regular" className="text-[#EA4335]"/>},
        {id: 5, social: "Instagram", link: "https://www.instagram.com/brianleao/", icon: <InstagramLogo size={32} weight="regular" className="text-[#E1306C]"/>},
    ]
    
    return(
        <div>
            <h1 className="text-center font-bold text-[clamp(2rem,4vw,3.75rem)] mt-[10rem]">Contato</h1>

            <div className="flex gap-4 flex-wrap justify-center mt-[2.69rem]">
                {
                    socialMedias.map((social) => (
                        <div key={social.id}>
                            <div className="bg-[#131313] flex items-center gap-[1rem] p-[7rem] rounded-[1.25rem] border-[0.625rem] border-[#161616] font-normal text-[clamp(1rem,2vw,4rem)]">
                                {social.icon}
                                <a href={social.link} target="_blank" rel="noopener noreferrer">{social.social}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
 }
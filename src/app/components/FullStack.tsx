import { CodeSimple, Code } from "@phosphor-icons/react";

export default function FullStack() {
    return(
        <div className="bg-[#181818] rounded-[6.25rem] flex items-center gap-[1.1875rem] max-w-max font-[Fira_Code] pt-4 pb-4 pl-8 pr-8 sm:pt-6 sm:pb-6 sm:pl-10 sm:pr-10 md:pt-8 md:pb-8 md:pl-12 md:pr-12 lg:pt-[1.4375rem] lg:pb-[1.4375rem] lg:pl-[3.3125rem] lg:pr-[3.3125rem]">
                <CodeSimple size={37} weight="bold"/>
                <p className="text-[clamp(1.2rem,1vw,1.875rem)]">Full-Stack Developer</p>
                <Code size={37} weight="bold"/>
        </div>
    )
}
import { CodeSimple, Code } from "@phosphor-icons/react";

export default function FullStack() {
    return(
        <div className="bg-[#181818] rounded-[6.25rem] mt-[1.25rem] mx-auto w-full lg:m-0 flex items-center gap-[1.1875rem] justify-center font-[Fira_Code] p-[1rem]">
                <CodeSimple size={30} weight="bold"/>
                <p className="text-[clamp(1.2rem,2vw,4.875rem)]">Full-Stack Developer</p>
                <Code size={30} weight="bold"/>
        </div>
    )
}
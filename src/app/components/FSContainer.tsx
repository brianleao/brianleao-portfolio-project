import { CodeSimple, Code } from "@phosphor-icons/react";

export default function FSContainer() {
    return (
        <div className="bg-[#181818] rounded-[6.25rem] mt-[1.25rem] mx-[1rem] lg:m-0 flex items-center gap-[0.7rem] sm:gap-[1.1875rem] justify-center font-[Fira_Code] p-[0.5rem] sm:p-[1rem]">
            <CodeSimple size="clamp(1.5rem,2vw,4rem)" weight="bold" />
            <p className="text-[clamp(0.7rem,4vw,6rem)] sm:text-[clamp(1.5rem,1.5vw,4rem)]">Full-Stack Developer</p>
            <Code size="clamp(1.5rem,2vw,4rem)" weight="bold"/>
        </div>
    );
}
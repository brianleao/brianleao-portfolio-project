"use client"

import { CodeSimple, Code } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function FSContainer() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#181818] rounded-[6.25rem] mt-[1.25rem] mx-[1rem] lg:m-0 flex items-center gap-[0.7rem] sm:gap-[1.1875rem] justify-center font-[Fira_Code] p-[0.5rem] sm:p-[1rem]"
        >
            <CodeSimple size="clamp(1rem,1.5vw,3rem)" weight="bold" />
            <p className="text-[clamp(1rem,3vw,2rem)] sm:text-[clamp(1rem,1.5vw,1.5rem)]">Full-Stack Developer</p>
            <Code size="clamp(1rem,1.5vw,3rem)" weight="bold"/>
        </motion.div>
    );
}
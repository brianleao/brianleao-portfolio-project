import { CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function ContactMe() {
    return(
        <div className="flex flex-col justify-center items-center cursor-pointer">
            <span className="text-[clamp(1.5rem,3vw,1.5625rem)] font-extralight mt-[1.5rem]">Me contate</span>
            <motion.div animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}>

                <CaretDown size={32} color="#e3e3e3" weight="light" />
            </motion.div>
        </div>
    )
}


"use client"

import { motion } from "framer-motion";

export default function Footer() {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center text-[clamp(1rem,1vw,3rem)] my-[3rem]"
        >
            <p>Feito por <span className="font-bold text-greenPantano" style={{ color: '#71AA1D' }}>Brian Leão</span></p>
        </motion.div>
    )
}
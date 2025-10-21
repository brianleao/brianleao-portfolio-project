"use client"

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="px-[1.55rem] sm:mt-[4rem] text-[clamp(3rem,6vw,5rem)] font-bold flex flex-col w-max"
    >
      Olá, eu sou o <br/>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-greenPantano text-shadow-extern2"
        style={{ color: '#71AA1D', textShadow: '0 0 40px #71AA1D' }}
      >
        Brian Leão
      </motion.span>
    </motion.h1>
  )
}

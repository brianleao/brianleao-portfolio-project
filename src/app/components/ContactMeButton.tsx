"use client";

import { useEffect, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function ContactMeButton() {
  const [iconSize, setIconSize] = useState(32);

  useEffect(() => {
    const vw = window.innerWidth;
    const size = Math.min(Math.max(vw * 0.01, 28), 44);
    setIconSize(size);
  }, []);

  return (
    <div className="flex justify-center">
      <a href="#contact" className="flex flex-col justify-center items-center cursor-pointer w-max">
        <span className="text-[clamp(1.5rem,1.5vw,2rem)] font-extralight">Me contate</span>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CaretDown
            size={iconSize}
            color="#e3e3e3"
            weight="light"
            className="select-none pointer-events-none"
          />
        </motion.div>
      </a>
    </div>
  );
}

"use client"

import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Image from "next/image";
import lionIcon from "./assets/lion_icon.svg"
import FSContainer from "./components/FSContainer";
import ContactMeButton from "./components/ContactMeButton";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  
  return(
    <div>
        <Header/>
        <div className="flex flex-wrap gap-[2.375rem] items-center justify-center mx-[2rem] mb-[5rem]">
          <div className="flex flex-col justify-center">
            <Presentation/>
            <FSContainer/>
          </div>
            <Image src={lionIcon} alt="Lion Icon" draggable={false} className="w-[clamp(15rem,20vw,25rem)] h-auto lg:mt-[3.8125rem] select-none"/>
        </div>
          <ContactMeButton/>
          <About/>
          <Contact/>
          <Experience/>
          <Footer/>
    </div>
  )
}

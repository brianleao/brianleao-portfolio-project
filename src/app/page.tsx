"use client"

import Header from "./components/Header"
import Main from "./components/Main"
import Image from "next/image";
import lionIcon from "./assets/lion_icon.svg"
import FullStack from "./components/FullStack";
import ContactMe from "./components/ContactMe";
import About from "./components/About";

export default function Home() {
  
  return(
    <div>
        <Header/>
        <div className="flex flex-wrap gap-[2.375rem] items-center justify-center">
          <div className="flex flex-col justify-center w-max">
            <Main/>
            <FullStack/>
          </div>
          <Image src={lionIcon} alt="Lion Icon" width={0} height={0} sizes="100vw" className="w-60 sm:w-100 h-auto lg:mt-[3.8125rem]"/>
        </div>
          <ContactMe/>
          <About/>
          
    </div>
  )
}

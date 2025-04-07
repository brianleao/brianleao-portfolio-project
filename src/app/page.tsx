"use client"

import Header from "./components/Header"
import Aside from "./components/Aside"
import ImageLion from "./components/ImageLion"
import FullStack from "./components/FullStack"

export default function Home() {
  
  return(
    <div className="flex items-center flex-wrap flex-row">
        <Header/>
      <div className="flex flex-col justify-center">
        <Aside/>
        <FullStack/>
      </div>
        <ImageLion/>
    </div>
  )
}

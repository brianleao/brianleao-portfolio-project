import Image from "next/image";
import lionIcon from "../assets/lion_icon.svg"

export default function ImageLion() {
    return(
        <main>
            <Image src={lionIcon} alt="Lion Icon"/>
        </main>
    )
}

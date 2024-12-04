import water from "../../assets/water-05.jpg";
import water2 from "../../assets/water-06.png"
import water3 from "../../assets/water-07.jpg"

import { IoIosArrowForward } from "react-icons/io";

import Container from "../../components/Container";

import { Link } from "react-router-dom";

export default function Produtos() {
    return (
        <Container>
            <div className="h-[calc(100vh-173px)] flex justify-center items-center font-playfair space-x-8
            px-24">
                <Link to={"/produtos/cisternas"} className="border border-zinc-400 p-2 space-y-2 shadow rounded-md font-sans
                hover:scale-[1.02] cursor-pointer duration-500">
                    <img src={water} className="w-96 h-96 border border-zinc-400 rounded-md" alt="" />
                    <div className="flex items-center justify-between">
                        <p className="text-xl">Cisternas</p>
                        <IoIosArrowForward size={22} />
                    </div>
                </Link>

                <Link to={"/produtos/caminhoes"} className="border border-zinc-400 p-2 space-y-2 shadow rounded-md font-sans
                hover:scale-[1.02] cursor-pointer duration-500">
                    <img src={water2} className="w-96 h-96 border border-zinc-400 rounded-md" alt="" />
                    <div className="flex items-center justify-between">
                        <p className="text-xl">Caminhão Pipa</p>
                        <IoIosArrowForward size={22} />
                    </div>
                </Link>

                <Link to={"/produtos/sistemas"} className="border border-zinc-400 p-2 space-y-2 shadow rounded-md font-sans
                hover:scale-[1.02] cursor-pointer duration-500">
                    <img src={water3} className="w-96 h-96 border border-zinc-400 rounded-md" alt="" />
                    <div className="flex items-center justify-between">
                        <p className="text-xl">Sistemas de Captação de Água</p>
                        <IoIosArrowForward size={22} />
                    </div>
                </Link>
            </div>
        </Container>
    )
}
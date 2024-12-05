import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header({ isProductHeader = false }: { isProductHeader?: boolean }) {
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        const ScrollNumber = setInterval(() => {
            setCurrentScroll(window.scrollY);
        }, 100)
        console.log(ScrollNumber);
    }, [currentScroll]);

    return (
        <header className={`flex items-center gap-y-6 antialiased fixed w-full flex-row px-12 py-2 
        justify-between z-50 ${currentScroll > 300 && "bg-white shadow-md"}`}>

            <a href={"/"}>
                <strong className="-tracking-tighter">WATER SOLUTIONS</strong>
            </a>


            {!isProductHeader && (
                <nav className="space-x-6 text-lg font-semibold flex">

                    <a href="#home">
                        <p className="hover:scale-110 duration-300 px-2 py-2">Home</p>
                    </a>

                    <a href="#about">
                        <p className="hover:scale-110 duration-300 px-2 py-2">Sobre</p>
                    </a>

                    <a href="#products">
                        <p className="hover:scale-110 duration-300 px-2 py-2">Produtos</p>
                    </a>

                    <a href={"#contact"}>
                        <p className="hover:scale-110 duration-300 px-2 py-2">Contato</p>
                    </a>

                </nav>
            )}


            <div className="flex items-center space-x-5">
                <FaUser className="cursor-pointer" size={26} />
                <FaShoppingCart className="cursor-pointer" size={26} />
            </div>

        </header >
    )
}
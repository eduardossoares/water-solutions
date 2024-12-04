import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex flex-col items-center font-playfair gap-y-6 antialiased">
            <div className="bg-white border-b-black border-b items-center
            py-10 px-24 w-full flex justify-center relative">
                <strong className="text-3xl font-light">Water Solutions</strong>
                <div className="flex gap-x-4 absolute right-24">
                    <FaUser size={32} />
                    <FaShoppingCart size={30} />
                </div>
            </div>

            <div className="text-black bg-[#f5f9f9]">
                <nav className="space-x-20 text-2xl">
                    <Link to={"/"}>
                        Início
                    </Link>

                    <Link to={"/produtos"}>
                        Produtos
                    </Link>

                    <Link to={"/empresa"}>
                        Empresa
                    </Link>

                    <Link to={"/"}>
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}
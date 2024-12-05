import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center gap-y-6 antialiased absolute w-full flex-row px-12 py-4 justify-between">

            <strong>WATER SOLUTIONS</strong>

            <nav className="space-x-6 text-lg font-semibold flex">

                <Link to={"/"}>
                    <p className="hover:scale-110 duration-300 px-2 py-2">Home</p>
                </Link>

                <Link to={"/"}>
                    <p className="hover:scale-110 duration-300 px-2 py-2">Sobre</p>
                </Link>

                <Link to={"/"}>
                    <p className="hover:scale-110 duration-300 px-2 py-2">Produtos</p>
                </Link>

                <Link to={"/"}>
                    <p className="hover:scale-110 duration-300 px-2 py-2">Contato</p>
                </Link>

            </nav>

            <div className="flex items-center space-x-12">
                <FaUser className="cursor-pointer" size={26} />
                <FaShoppingCart className="cursor-pointer" size={26} />
            </div>

        </header >
    )
}
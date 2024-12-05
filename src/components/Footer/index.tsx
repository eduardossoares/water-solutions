import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black py-4 flex px-8 text-white justify-between absolute w-full">
            <div className="flex gap-x-8">
                <div className="flex items-center gap-x-2">
                    <FaMapMarkerAlt />
                    <p>Alameda Araguaia, N° 2136 - Barueri, SP</p>
                </div>

                <div className="flex items-center gap-x-2">
                    <FaPhone />
                    <p>0800 427 4213</p>
                </div>
            </div>

            <p>© Todos os direitos reservados.</p>

            <div className="flex gap-x-4">
                <div className="flex items-center gap-x-1 cursor-pointer">
                    <CiInstagram size={20} />
                    <span>@watersolutionstcc</span>
                </div>
                <div className="flex items-center gap-x-1 cursor-pointer">
                    <CiMail size={20} />
                    <span>solucoeswater@gmail.com</span>
                </div>
            </div>
        </footer>
    )
}
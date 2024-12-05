import Container from "../../components/Container"

import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="h-screen flex items-center 
        bg-homeImg bg-cover bg-center bg-no-repeat">
            <Container>
                <div className="flex flex-col gap-y-4 md:w-[50%] px-4 max-lg:text-center">
                    <h1 className="text-4xl font-light">
                        <span className="font-semibold">Água Limpa para Todos: </span>
                        Um Compromisso da {" "}
                        <span className="font-semibold">
                            Water Solutions
                        </span>
                        {" "}com São Paulo
                    </h1>
                    <span className="font-light">
                        Assim como a liberdade e a saúde, a água de boa qualidade só é valorizada quando falta.
                    </span>
                    <div>
                        <button className="hover:scale-105 duration-300
                        shadow-sm flex items-center bg-black text-white justify-center
                        gap-x-8 px-20 py-2.5 text rounded-md font-semibold relative">
                            Veja Mais
                            <FaArrowRightLong className="absolute right-6" size={20} />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
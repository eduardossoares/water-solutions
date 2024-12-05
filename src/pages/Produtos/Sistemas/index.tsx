import { useEffect } from "react";
import Container from "../../../components/Container";

import { FaShoppingCart } from "react-icons/fa";

export default function Sistemas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="h-screen flex items-center 
            bg-white border-y-2 border-zinc-300">
            <Container>
                <div className="flex flex-row gap-x-6">

                    <div className="flex flex-col gap-y-4 flex-1">
                        <div className="bg-system1 bg-cover bg-center w-full h-[80%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                        <div className="bg-system2 bg-cover bg-center w-full h-[60%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">
                                Sistema de Captação de Água da Chuva
                            </h2>

                            <article className="space-y-4">
                                <p>
                                    O sistema de captação de água da chuva é uma solução sustentável
                                    composta por calhas, condutores, filtros, reservatório e bomba, que
                                    captam, filtram, armazenam e distribuem a água da chuva.
                                </p>

                                <p>
                                    A água coletada pode ser usada para consumo não potável, como lavagem
                                    de roupas, veículos, irrigação de jardins e para bacias sanitárias.
                                </p>

                                <p>
                                    Este sistema, totalmente independente do abastecimento de água potável,
                                    ajuda a economizar até R$ 300 por mês na conta de água, ao mesmo tempo em que
                                    protege a água armazenada de contaminantes como animais, calor e luz solar
                                </p>
                            </article>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Material Utilizado:</h3>

                            <ul className="space-y-4">
                                <li><strong>- Calhas: </strong>Alumínio, PVC ou aço galvanizado para captar a água da chuva.</li>
                                <li><strong>- Condutores: </strong>Tubos de PVC ou materiais resistentes para transportar a água até o reservatório.</li>
                                <li><strong>- Filtro: </strong>Polietileno ou aço inoxidável para remover impurezas da água.</li>
                                <li><strong>- Reservatório: </strong>Tanques de plástico, fibra de vidro, concreto ou metal para armazenamento seguro. </li>
                                <li><strong>- Bomba: </strong>Submersíveis ou periféricas para transferir a água para pontos de distribuição.</li>
                            </ul>
                        </div>

                        <button className="bg-black w-full items-center justify-center
                        py-2 flex rounded-sm text-white font-semibold gap-x-4 hover:scale-[1.02]
                        will-change-transform duration-300">
                            <FaShoppingCart className="cursor-pointer" size={20} />
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
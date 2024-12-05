import { useEffect } from "react";
import Container from "../../../components/Container";

import { FaShoppingCart } from "react-icons/fa";

export default function Cisternas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="h-screen flex items-center 
            bg-white border-y-2 border-zinc-300">
            <Container>
                <div className="flex flex-row gap-x-6">

                    <div className="flex flex-col gap-y-4 flex-1">
                        <div className="bg-cistern bg-cover bg-center w-full h-[80%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                        <div className="bg-cistern2 bg-cover bg-center w-full h-[60%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">
                                Cisternas
                            </h2>

                            <article>
                                As cisternas são soluções sustentáveis para captar e
                                armazenar água da chuva, ideais para regiões com acesso limitado à
                                água tratada. Feitas com materiais duráveis, garantem uma fonte
                                confiável para uso diário, como higiene, limpeza e pequenas atividades
                                agrícolas. Projetadas para períodos de seca, promovem autonomia e
                                qualidade de vida nas comunidades atendidas.
                            </article>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Material Utilizado:</h3>

                            <ul className="space-y-4">
                                <li> <strong> - Alvenaria:</strong> Plástico ou fibra de vidro, definidos de acordo com a durabilidade e o orçamento.</li>
                                <li> <strong> - Sistema de Captação: </strong>Sistema de Captação: Telhados ou outras superfícies com calhas direcionadas para o reservatório.</li>
                                <li> <strong> - Tampa Vedante: </strong>Tampa Vedante: Para evitar a contaminação e o acesso de insetos.</li>
                                <li> <strong> - Bomba d’Água: </strong>Bomba d’Água: Em casos onde é necessário transporte para pontos de uso.</li>
                                <li>  <strong> - Sistema de Saída: </strong> Torneiras ou pontos de distribuição para fácil acesso à água armazenada.</li>
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
import Container from "../../../components/Container";

import { FaShoppingCart } from "react-icons/fa";

export default function Caminhoes() {
    return (
        <section className="h-screen flex items-center 
            bg-white border-y-2 border-zinc-300">
            <Container>
                <div className="flex flex-row gap-x-6 px-4">

                    <div className="flex flex-col gap-y-4 flex-1">
                        <div className="bg-truck1 bg-cover bg-center w-full h-[80%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                        <div className="bg-truck2 bg-cover bg-center w-full h-[60%] rounded-md border-2 border-blue-400
                        shadow-sm">
                        </div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">
                                Caminhões Pipa
                            </h2>

                            <div className="space-y-12">
                                <article className="space-y-4">
                                    <p>
                                        Os caminhões-pipa são uma solução eficaz para levar água potável a regiões com acesso
                                        limitado à infraestrutura hídrica.
                                    </p>

                                    <p>
                                        Eles transportam água de forma segura, atendendo às necessidades emergenciais de
                                        comunidades carentes enquanto soluções permanentes, como cisternas ou poços, estão sendo implementadas.
                                    </p>
                                </article>

                                <article className="space-y-4">
                                    <p>
                                        O caminhão-pipa da Water Solutions possui capacidade de
                                        10.000 a 30.000 litros, ideal para abastecer obras, empresas, residências e áreas rurais.
                                    </p>

                                    <p>
                                        Equipado com um tanque de alta resistência e sistema de
                                        distribuição eficiente, transporta água de forma segura e sustentável.
                                    </p>

                                    <p>
                                        É projetado para operar em diferentes terrenos, garantindo
                                        agilidade e versatilidade no abastecimento.
                                    </p>
                                </article>
                            </div>

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
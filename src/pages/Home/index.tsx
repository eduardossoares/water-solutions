import Container from "../../components/Container"

import { FaArrowRightLong } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

import aboutImg from "../../../public/about-us.png"
import aboutImg2 from "../../../public/about-us-2.png"

import productCistern from "../../../public/produto-cisterna.jpg"
import productTruck from "../../../public/produto-caminhao.png"
import productSistem from "../../../public/produto-captacao.jpg"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="">

            <section className="h-screen flex items-center 
            bg-homeImg bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="flex flex-col gap-y-5 md:w-[50%] px-4 max-lg:text-center">
                        <h1 className="text-4xl font-light">
                            <span className="font-semibold">Água Limpa para Todos: </span>
                            Um Compromisso da {" "}
                            <span className="font-semibold">
                                Water Solutions
                            </span>
                            {" "}com São Paulo
                        </h1>
                        <span className="font-light text-lg">
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
            </section>

            <section className="h-[calc(100vh-200px)] flex items-center 
            bg-white border-y-2 border-zinc-300">
                <Container>

                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-row gap-x-4">
                            <img src={aboutImg} alt="Imagem" />
                            <div className="space-y-3">
                                <div className="flex items-center text-2xl gap-x-2">
                                    <IoWater size={26} className="text-blue-800" />
                                    <h2 className="text-2xl text-blue-800 font-semibold">Sobre Nós</h2>

                                </div>
                                <article>
                                    A <strong className="text-blue-800">Water Solutions</strong> é uma empresa comprometida com soluções sustentáveis e
                                    inovadoras para abastecimento de água e saneamento. Especializada em
                                    <i> Parcerias Público-Privadas (PPPs)</i> , trabalhamos junto a prefeituras para melhorar a
                                    infraestrutura hídrica, atendendo comunidades carentes de forma eficiente. Nosso impacto
                                    vai além da água potável, oferecendo educação e capacitação para o autossustento. Com alta
                                    satisfação dos clientes, somos reconhecidos pela qualidade e confiabilidade dos nossos serviços.
                                    Priorizamos transparência e responsabilidade, garantindo que nossos projetos
                                    sigam as melhores práticas de governança.
                                </article>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-4">
                            <img src={aboutImg2} alt="Imagem" />
                            <div className="space-y-3">
                                <h2 className="text-2xl text-blue-800 font-semibold">Você Sabia?</h2>

                                <article className="space-y-4">
                                    <p>Em nossa pesquisa de campo, descobrimos que:</p>
                                    <ul>
                                        <li>
                                            - 60% da população das comunidades analisadas não possuem coleta de esgoto;
                                        </li>

                                        <li>
                                            - Apenas 15% possuem esgoto tratado;
                                        </li>

                                        <li>
                                            - 40% Não possuem acesso a água tratada;
                                        </li>

                                        <li>
                                            - Média estadual de doenças hídricas é de 20%;
                                        </li>
                                    </ul>

                                    <p>
                                        Esses dados destacam a urgência de soluções para o saneamento e
                                        acesso à água tratada, com um foco em melhorar a qualidade de vida
                                        das comunidades afetadas e reduzir os impactos ambientais e de saúde.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="h-[calc(100vh-200px)] flex items-center 
            bg-homeImg bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Conheça Nossos Serviços!</h2>
                        <div className="grid grid-cols-3 gap-x-4">
                            <Link to={"/produtos/cisternas"} className="text-center space-y-2 hover:scale-[1.03] duration-500 cursor-pointer will-change-transform">
                                <img className="rounded-sm shadow-sm border border-zinc-400" src={productCistern} alt="" />
                                <p className="font-semibold text-lg">Cisternas.</p>
                            </Link>

                            <Link to={"/produtos/caminhoes"} className="text-center space-y-2 hover:scale-[1.03] duration-500 cursor-pointer will-change-transform">
                                <img className="rounded-sm shadow-sm border border-zinc-400
                                " src={productTruck} alt="" />
                                <p className="font-semibold text-lg">Caminhões Pipa.</p>
                            </Link>

                            <Link to={"/produtos/sistemas-de-captação-de-chuva"} className="text-center space-y-2 hover:scale-[1.03] duration-500 cursor-pointer will-change-transform">
                                <img className="rounded-sm shadow-sm border border-zinc-400 " src={productSistem} alt="" />
                                <p className="font-semibold text-lg">Sistemas de Captação de Chuva.</p>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="h-[calc(100vh-300px)] justify-center flex items-center bg-white
            flex-col border-y-2 border-zinc-300">
                <Container>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-2xl">Contate-nos para realizar um orçamento!</h2>
                        <form action="" className="w-full space-y-4">
                            <div className="flex gap-x-4">
                                <input className="flex-1 bg-zinc-100 py-2 px-4
                                outline-none rounded-sm border-zinc-200 border
                                placeholder:text-zinc-400"
                                    type="text" placeholder="Seu Nome..." />
                                <input className="flex-1 bg-zinc-100 py-2 px-4
                                outline-none rounded-sm border-zinc-200 border
                                placeholder:text-zinc-400"
                                    type="email" placeholder="Seu E-mail..." />
                            </div>
                            <textarea className="w-full bg-zinc-100 px-4 py-4
                            outline-none rounded-sm border-zinc-200 border placeholder:text-zinc-400
                            " name="" id="" rows={10} placeholder="Sua Mensagem...">
                            </textarea>
                            <button className="bg-black w-full py-3 flex items-center
                            justify-center text-white font-semibold text-lg will-change-transform
                            hover:scale-[1.01] duration-500 shadow-md">
                                Enviar
                            </button>
                        </form>
                    </div>
                </Container>
            </section>

        </div>
    )
}
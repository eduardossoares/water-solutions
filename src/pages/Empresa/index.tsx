import water from "../../assets/water-04.png"
import Container from "../../components/Container"

export default function Empresa() {
    return (
        <Container>
            <div className="h-[calc(100vh-173px)] flex justify-center items-center font-playfair space-x-8
            px-24">
                <div className="flex space-x-8">
                    <img className="w-[34rem]" src={water} alt="Water" />
                    <div className="space-y-8 text-justify">
                        <article className="text-xl">
                            A Water Solutions é uma empresa localizada em Barueri,
                            Alphaville, dedicada a fornecer soluções acessíveis de abastecimento
                            de água para municípios de difícil acesso e baixa população. Oferecemos
                            serviços como captação de água da chuva, poços artesianos e transporte de
                            água por caminhões-pipa. Com foco em sustentabilidade e impacto social,
                            nossa missão é garantir o acesso à água potável de qualidade para comunidades
                            carentes, sempre com soluções econômicas e eficientes.
                        </article>

                        <ul className="text-xl space-y-4">
                            <li><span className="font-bold">Soluções Personalizadas: </span>Oferecemos orçamentos ajustados às necessidades específicas de cada cliente, com pacotes de serviços escaláveis e flexíveis.</li>
                            <li><span className="font-bold">Planejamento Financeiro Transparente: </span> Apresentamos orçamentos claros, detalhados e sem surpresas, garantindo que nossos clientes compreendam cada investimento.</li>
                            <li><span className="font-bold">Flexibilidade no Pagamento: </span> Oferecemos opções de pagamento acessíveis, com parcelamento conforme o cronograma do projeto, tornando as soluções viáveis para qualquer orçamento.</li>
                            <li><span className="font-bold">Parcerias Público-Privadas: </span> Buscamos parcerias para viabilizar projetos essenciais, compartilhando custos e tornando as soluções acessíveis para todos.
                            </li>
                            <li><span className="font-bold">Custo-Benefício e Sustentabilidade: </span> Nossos projetos são sustentáveis, otimizando o uso da água e gerando economia a longo prazo.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}
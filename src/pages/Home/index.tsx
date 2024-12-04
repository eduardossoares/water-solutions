import water from "../../assets/water-01.jpg"

export default function Home() {
    return (
        <div className="h-[calc(100vh-173px)] flex items-center justify-center font-playfair space-x-8
        px-24">
            <div className="flex flex-col items-center space-y-2">
                <img className="w-[34rem]" src={water} alt="Water" />
                <span className="text-2xl">1/3</span>
            </div>
            <div className="text-center space-y-6 px-6">
                <h1 className="text-3xl">Water Solutions</h1>
                <p className="text-2xl w-[66rem]">
                    A Water Solutions oferece acesso a água potável e saneamento em
                    áreas carentes de São Paulo, trabalhando com prefeituras e parceiros
                    para implementar sistemas sustentáveis e educação em higiene.
                </p>
                <p className="underline text-lg">Ver mais</p>
            </div>
        </div>
    )
}
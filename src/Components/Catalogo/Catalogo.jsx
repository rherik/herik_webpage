import dalva from '../../assets/servicos/web_dalva.png'
import viralatas from '../../assets/servicos/web_viralata.png'
import yo from '../../assets/servicos/web_yo.png'

export default function Catalogo() {
    let links = [
        {texto: "Site para o Studio Dalva Campos",
            link: 'https://dalv-web.vercel.app/',
            img: dalva},
        {texto: 
            "Site dos vira-latas. Este é o projeto pelo qual tenho mais apreço. Nele desenvolvi uma página web utilizando Flask, Postgresql, S3 AWS", 
            link: 'https://siteflask-110i.onrender.com/',
            img: viralatas},
        {texto: 
            "Agregador de links",
            link: 'https://rherik.github.io/card-component/',
            img: yo}
    ]

    return (
        <section className='grid grid-cols-2 justify-center static mt-16 ml-8'>
            {
                links.map((link)=>(
                    <div className='w-96 m-4'>
                        <h2 className='whitespace-pre-line text-gray-700 text-balance font-semibold'>{link.texto}</h2>
                        <a className='transform w-80 transition duration-500 hover:scale-125 flex justify-center items-center' 
                        href={link.link}>
                            <img src={link.img} alt="" className='shadow-xl flex flex-wrap rounded-2xl' />
                        </a>
                    </div>
                ))
            }
        </section>
    )
}

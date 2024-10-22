import dalva from '../../assets/servicos/web_dalva.png'
import viralatas from '../../assets/servicos/web_viralata.png'
import yo from '../../assets/servicos/web_yo.png'
import flask_api from '../../assets/servicos/swaggerFlaskApi.png'

export default function Catalogo() {
    let links = [
        {titulo: "Site para o Studio Dalva Campos",
            texto: 'Freelance desenvolvido para o Studio de estética e bem estar Dalva Campos com React, Tailwind e deploy na Vercel.',
            link: 'https://studiodalva.vercel.app/',
            img: dalva},
        {titulo: 
            "Site dos vira-latas.", 
            texto: `Este é o projeto pelo qual tenho mais apreço. Nele desenvolvi uma página web utilizando Flask, Postgresql, S3 AWS.
            Este é um projeto que vou refazer do zero para separar o frontend do backend consumindo uma api python com uma página react.`,
            link: 'https://siteflask-110i.onrender.com/',
            img: viralatas},
        {titulo: 
            "Agregador de links",
            texto: 'Neste desenvolvi uma página web utilizando React, Tailwind e deploy no github pages.',
            link: 'https://rherik.github.io/card-component/',
            img: yo},
        {titulo: 
            "Flask API",
            texto: 'Desenvolvi uma API para registro de albuns de música para ser consumido no meu frontend de albuns favoritos. Aqui utilizo Flask, PostgreSQL, AWS S3 Bucket e Docker.',
            link: 'https://favs-api.onrender.com/swagger-ui',
            img: flask_api}
    ]

    return (
        <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-center
         bg-[#F2F0EA] dark:bg-gray-900' id='catalogo'>
            {
                links.map((link)=>(
                    <div className='mt-20 mb-20 ml-16 md:ml-6 md:mr-36 rounded-lg bg-white drop-shadow-lg 
                    dark:bg-surface-dark w-64 md:w-72 md:h-[430px] transform transition duration-500 hover:scale-125'>
                        <a className='' 
                        href={link.link}
                        target='_blank'
                        >
                            <img src={link.img} alt="" className='p-4 shadow-xl rounded-2xl' />
                        </a>
                        <div className='p-6'>
                            <h5 className='mb-2 text-xl font-medium leading-tight'>{link.titulo}</h5>
                            <p className='md:text-justify md:align-middle whitespace-pre-line text-gray-700 text-balance font-medium'>{link.texto}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

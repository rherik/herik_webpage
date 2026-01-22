import dalva from '../../assets/servicos/web_dalva.png'
import viralatas from '../../assets/servicos/web_viralata.png'
import yo from '../../assets/servicos/web_yo.png'
import flask_api from '../../assets/servicos/swaggerFlaskApi.png'
import { BsGithub } from "react-icons/bs"

export default function Catalogo() {
    let links = [
        {titulo: "Site para o Studio Dalva Campos",
            texto: 'Freelance desenvolvido para o Studio de estética e bem estar Dalva Campos com React, Tailwind e deploy na Vercel.',
            link_prog: 'https://studiodalva.vercel.app/',
            link_rep: 'https://github.com/rherik/studiodalva',
            img: dalva},
        {titulo: 
            "Site dos vira-latas(Em manutenção, mas você pode acessar o repositório do projeto).", 
            texto: `Este é o projeto pelo qual tenho mais apreço. Nele desenvolvi uma página web utilizando Flask, Postgresql, S3 AWS.
            Este é um projeto que vou refazer do zero para separar o frontend do backend consumindo uma api python com uma página react.`,
            link_prog: '#',
            link_rep: 'https://github.com/rherik/adocao_flask',
            img: viralatas},
        {titulo: 
            "Agregador de links",
            texto: 'Neste desenvolvi uma página web utilizando React, Tailwind e deploy no github pages.',
            link_prog: 'https://rherik.github.io/card-component/',
            link_rep: 'https://github.com/rherik/card-component',
            img: yo},
        {titulo: 
            "Flask API(Em manutenção, mas você pode acessar o repositório do projeto)",
            texto: 'Desenvolvi uma API para registro de albuns de música para ser consumido no meu frontend de albuns favoritos. Aqui utilizo Flask, PostgreSQL, AWS S3 Bucket e Docker.',
            link_prog: '#',
            link_rep: 'https://github.com/rherik/favs-api',
            img: flask_api}
    ]

    return (
        <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start
         bg-[#F2F0EA] dark:bg-slate-900' id='catalogo'>
            {
                links.map((link)=>(
                    <div className='mt-20 mb-20 md:ml-10 md:mr-36 rounded-lg bg-white drop-shadow-lg 
                    dark:bg-surface-dark w-64 md:w-72 md:h-fit'>
                        <a className='' 
                        href={link.link_prog}
                        target='_blank'
                        >
                            <img src={link.img} alt="" className='p-4 shadow-xl rounded-2xl transform transition duration-500 hover:scale-125' />
                        </a>
                        <div className='p-4'>
                            <div className="flex items-center justify-between">
                                <h5 className='mb-2 text-xl font-medium leading-tight'>{link.titulo}</h5>
                                <button className='flex gap-2'> 
                                    <a href={link.link_rep}
                                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 
                                    transform transition duration-300 hover:scale-125 cursor-pointer">
                                        <BsGithub /></a>
                                </button>
                            </div>
                            <p className='flex row md:text-justify md:align-middle whitespace-pre-line text-gray-700 text-balance font-medium'>
                                {link.texto}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

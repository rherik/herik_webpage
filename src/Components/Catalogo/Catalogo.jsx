import dalva from '../../assets/servicos/web_dalva.png'
import viralatas from '../../assets/servicos/web_viralata.png'
import yo from '../../assets/servicos/web_yo.png'

export default function Catalogo() {
    let links = [
        {titulo: "Site para o Studio Dalva Campos",
            texto: 'Freelance desenvolvido para o Studio de estética e bem estar Dalva Campos com React, Tailwind e deploy na Vercel',
            link: 'https://dalv-web.vercel.app/',
            img: dalva},
        {titulo: 
            "Site dos vira-latas.", 
            texto: 'Este é o projeto pelo qual tenho mais apreço. Nele desenvolvi uma página web utilizando Flask, Postgresql, S3 AWS',
            link: 'https://siteflask-110i.onrender.com/',
            img: viralatas},
        {titulo: 
            "Agregador de links",
            texto: 'Neste desenvolvi uma página web utilizando React, Tailwind e deploy no github pages.',
            link: 'https://rherik.github.io/card-component/',
            img: yo}
    ]

    return (
        <section className='flex flex-col-3 justify-center static mt-24 mb-16 space-x-16'>
            {
                links.map((link)=>(
                    <div className='block rounded-lg bg-white shadow-secundary-1 dark:bg-surface-dark w-72
                    transform transition duration-500 hover:scale-125'>
                        <a className='' 
                        href={link.link}>
                            <img src={link.img} alt="" className='flex justify-center items-center p-4 shadow-xl rounded-2xl' />
                        </a>
                        <div className='p-6 text-surface dark:text-white'>
                            <h5 className='mb-2 text-xl font-medium leading-tight'>{link.titulo}</h5>
                            <p className='whitespace-pre-line text-gray-700 text-balance font-semibold'>{link.texto}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

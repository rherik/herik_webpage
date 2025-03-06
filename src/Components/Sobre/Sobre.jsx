import React from 'react'
import me1 from '../../assets/servicos/me1.png'
import me2 from '../../assets/servicos/me2.png'
import me3 from '../../assets/yo.png'
import ImageSlider from '../Slider/ImageSlider'
import { useTypewriter } from "react-simple-typewriter";

export default function Sobre() {
  const imgs = [me1, me2, me3]
  const [text] = useTypewriter({
    words: ["Python(Flask, Django, Selenium, Beautiful Soup),", "Banco de dados(PostgreSQL)", "e JavaScript(React)."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <section className='grid grid-cols-1 bg-[#F2F0EA] dark:bg-gray-900 pl-8 pr-8 p-4 pb-16' id='sobre'>
      <h2 className='dark:text-[#F2F0EA] text-center text-4xl font-extralight p-4 mb-4 capitalize text-designColor tracking-wide'>sobre mim</h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:space-x-16">
          <ImageSlider imgs_url={imgs} />
        <div className='w-96 p-8'>
          <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold
            dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA]'>
              Formado em Análise e Desenvolvimento de Sistema pela Estácio de Sá 
              tenho especialidades em:
            </h5>
            <p className='text-purple-900'>
                {text}
            </p>
            <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold 
            dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA]'>
              Além de Docker e arquitetura RestAPI. Tenho focado em desenvolvimento 
              Full-Stack para entrega aplicações completas.
            </h5>
        </div>
      </div>
    </section>
  )
}

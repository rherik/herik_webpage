import React, { useState } from 'react'
import AnImagem from '../../assets/yo.png'
import Catalogo from '../Catalogo/Catalogo'


export default function Homepage() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0){
      setCount(0)
    } else {
      setCount(count - 1);
    }
  };

  return (
    <main className=''>
      <div className='flex flex-col-1 justify-center items-center bg-[#F2F0EA] dark:bg-gray-900 min-h-64 md:min-h-96' id='home'>
      <div className='mt-20 mb-20 ml-4 mr-4'>
          <img src={AnImagem} alt="" className='w-80 left-2 rounded-lg' />
        <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold
        dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] first-letter:mr-3 pt-2'>
          Formado em Análise e Desenvolvimento de Sistemas <br /> pela Estácio de Sá 
          tenho especialidade com <br /> 
        </h5>
        <p className='text-purple-900'>
            Python(Flask, Django, Selenium), Banco de dados PostgreSQL e JavaScript(React).
        </p>

        <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold 
        dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] first-letter:mr-3 pt-2'>
          Além de Docker e arquitetura RestAPI. <br /> Tenho focado em desenvolvimento 
          Full-Stack para entrega aplicações completas.
        </h5>
      </div>

      {/* <aside className='w-96 static right-2 py-4'>
        <div className='flex flex-col text-3xl p-2'>
          <p className='text-black'>Concorra a R$100.000,00 ou uma Fastback T200!</p> 
          <p className='font-bold text-green-700'>O site escolhe números aleatórios para você.</p>
        </div>

        <div className="flex row-span-3 p-2 bg-black text-gray-900 border border-gray-300 rounded-lg
        focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          <button 
          type='button' 
          onClick={handleDecrement}
          className="select-none rounded-lg bg-green-500 py-3 w-full text-center align-middle font-sans text-xs 
          font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg
          hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
          disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >-
          </button>
            <p className='flex items-center px-28'>{count}</p>
            <button 
          type='button'
          onClick={handleIncrement}
          className="select-none rounded-lg bg-green-500 py-3 w-full text-center align-middle font-sans text-xs 
          font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg
          hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
          disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >+
          </button>
        </div>
        <button
            className="select-none rounded-lg bg-green-500 py-3 w-full text-center align-middle font-sans text-xs 
            font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg
            hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
            active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Comprar agora
          </button>
          <a href="/cadastro">
          <button
            className="select-none rounded-lg border border-gray-900 py-3 w-full text-center align-middle 
            font-sans text-xs font-bold uppercase text-green-500 transition-all hover:opacity-75 focus:ring
            focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 
            disabled:shadow-none"
            type="button">
            Ver meus números
          </button>
          </a>
      </aside> */}

      </div>
    <Catalogo />
    </main>
  )
}

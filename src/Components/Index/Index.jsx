import React, { useState } from 'react'
import Aimagem from '../../assets/yo.png'


function Index() {
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
    <main className='flex flex-row justify-around static p-2 min-h-64 md:min-h-80'>
      <div className='w-80 left-2'>
          <img src={Aimagem} alt="" className='rounded-lg' />
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
    </main>
  )
}

export default Index
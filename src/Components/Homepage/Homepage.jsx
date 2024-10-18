import Catalogo from '../Catalogo/Catalogo'
import Sobre from '../Sobre/Sobre'
import logo from "../../assets/d_logo.png"

export default function Homepage() {

  return (
    <main className=''>
      <div className='flex flex-col-1 justify-center items-center bg-[#F2F0EA] dark:bg-gray-900 min-h-64 md:min-h-96' id='home'>
        <div className='mt-20 mb-20 ml-4 mr-4'>
            <img src={logo} alt="" className='w-80 left-2 rounded-lg' />
        </div>

      <aside className='w-96 static right-2 py-4'>
        <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold
          dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] first-letter:mr-3 pt-2'>
            Conheça a Hliki Soluções Tecnológicas, <br /> meu empreendimento  em teclonogia.<br /> 
          </h5>
          <p className='text-purple-900'>
              Loren ipsum.
          </p>

          <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold 
          dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] first-letter:mr-3 pt-2'>
            Abaixo você pode encontrar alguns dos serviços que já fiz.
        </h5>
      </aside>

      </div>
    <Catalogo />
    <Sobre />
    </main>
  )
}

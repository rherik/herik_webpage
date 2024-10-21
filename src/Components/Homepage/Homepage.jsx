import Catalogo from '../Catalogo/Catalogo'
import Sobre from '../Sobre/Sobre'
import logo from "../../assets/d_logo.png"
import me1 from '../../assets/servicos/me1.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Homepage() {

  return (
    <main className=''>
      <div className='flex flex-col justify-center items-center bg-[#F2F0EA] dark:bg-gray-900 min-h-64 md:min-h-96 md:flex-row' id='home'>
        <div className='mt-20 mb-20 ml-4 mr-4'>
            <img src={logo} alt="" className='w-80 left-2 rounded-lg' />
        </div>

      <div className='w-96 align-middle pl-8 pr-8 pt-2'>

        <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold
          dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA]'>
            Conheça a Hliki Soluções Tecnológicas, meu empreendimento  em teclonogia
            <a href="https://www.instagram.com/_hliki/" 
            target='_blank' className='text-purple-900'> aqui.
            </a>  
        </h5>

          <h5 className='font-semibold first-letter:text-7xl first-letter:font-bold 
          dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA] pt-2'>
            Abaixo você pode encontrar alguns dos serviços que já fiz.
        </h5>
      </div>

      </div>
      <FloatingWhatsApp 
      phoneNumber='5521982952515' 
      accountName='Herik'
      chatMessage='Olá, Como posso te ajudar?'
      allowClickAway
      statusMessage='Resposta em até uma hora'
      notificationSound
      avatar={me1}
      />
    <Catalogo />
    <Sobre />
    </main>
  )
}

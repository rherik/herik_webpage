import { useLayoutEffect } from 'react'
import Catalogo from '../Catalogo/Catalogo'
import Sobre from '../Sobre/Sobre'
import eu from '../../assets/hliki1.png'
import hliki1 from '../../assets/hliki1.png'
import hliki2 from '../../assets/hliki2.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function Homepage() {

   let imgs = [hliki1, hliki2]

   useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#img1", {
      x: 0,
      opacity: 1,
      scrollTrigger:{
        trigger: '#divImage',
        //markers: true,
        start: 'top 400px',
        end: 'bottom 600px',
        scrub: true
      }
    })
    gsap.to("#img2", {
      x: 0,
      opacity: 1,
      scrollTrigger:{
        trigger: '#divImage',
        //markers: true,
        start: 'top 400px',
        end: 'bottom 600px',
        scrub: true
      }
    })
    return () => {
      gsap.killTweensOf('#img1', '#img2')
    }
   })

  return (
    <main className='flex flex-col items-center bg-[#F2F0EA] dark:bg-slate-900' id='home'>
      
        <div className='w-72 md:w-[980px] pt-20 md:pl-8'>
          <p className='text-center pb-8 font-semibold first-letter:text-7xl first-letter:font-bold text-2xl
            dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA]'>
              Visite a <span className='text-purple-900'><a href="https://www.instagram.com/_hliki/" target='_blank'>
              Hliki Soluções Tecnológicas</a></span>.
          </p>

          <p className='font-[title] text-2xl text-center dark:text-[#F2F0EA]'>
          Com o intuito de tornar o conhecimento que adquiri acessivel para mais pessoas, aqui aplico e exercito meus conhecimentos e exponho alguns dos meus projetos. A Hliki foi feita para que outras pessoas possam acessar, interagir e compartilhar o meu trabalho e experiências, além de facilitar o contato para solicitação de serviços. Nesta plataforma é onde divulgo meu empreendimento, onde compartilho meus conhecimentos e onde você pode encontrar atualizações sobre meus trabalhos e entrar em contato para solicitar algum serviço.
          </p>

          <div className='flex md:flex-row flex-col justify-around items-center pt-20 space-y-3 transition-transform ease-in-out' id='divImage'> 
            <img src={imgs[0]} alt="" className='w-64 rounded-md md:translate-x-[-500px] opacity-0' id='img1' />
            <img src={imgs[1]} alt="" className='w-64 rounded-md md:translate-x-[500px] opacity-0' id='img2' />
          </div>

          <p className='md:pl-40 font-[title] first-letter:text-7xl first-letter:font-bold text-2xl
            dark:text-[#F2F0EA] first-letter:text-[#3b3a274f] dark:first-letter:text-[#F2F0EA] pt-24'>
              Abaixo você pode encontrar alguns dos serviços que já fiz.
          </p>
        </div>

      <FloatingWhatsApp 
      phoneNumber='5521982952515' 
      accountName='Herik'
      chatMessage='Olá, Como posso te ajudar?'
      statusMessage='Resposta em até uma hora'
      placeholder='Gostaria de um orçamento de um site.'
      allowClickAway
      notificationSound={true}
      avatar={eu}
      />
    <Catalogo />
    <Sobre />
    </main>
  )
}

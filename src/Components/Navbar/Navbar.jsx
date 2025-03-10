import React, { useState } from 'react'
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2'
import logo from "../../assets/hliki1.png"
import Toggle from "../Toggle/Toggle"
import resume from '../../assets/resume.pdf'
import { Link } from 'react-scroll'

export default function Navbar () {
  let links = [
    {name: 'Home', link: 'home', id: 'home', internal: true},
    {name: 'Meus trabalhos', link: 'catalogo', id:'catalogo', internal: true},
    {name: 'Currículo', link: resume, target: '_blank', 
      type: 'application/pdf', rel: 'noopener noreferrer', internal: false},
    {name: 'Sobre', link: 'sobre', id: 'sobre', internal: true}
  ];
  const [open, setOpen] = useState(false);
  const handleButton = () => {
    setOpen(open => !open)
  }
  return (
        <nav className="header fixed top-0 left-0 w-full px-10 py-4 bg-[#F2F0EA] dark:bg-gray-900 
        flex items-center justify-between z-[100] shadow-md">
            <div className='w-55 h-16'>
              <a href="/" className="logo">
                <img src={logo} alt="" className='w-16 rounded-lg'/>
              </a>
            </div>
            
            <div onClick={handleButton} 
            className='text-2xl absolute transition-transform duration-700 right-8 top cursor-pointer md:hidden'>
              {open ? <HiMiniXMark />: <HiMiniBars3 />}
            </div>
            <ul className={`bg-[#F2F0EA] dark:bg-gray-900 pb-12 absolute right-0 pl-2 w-full h-[340px] rounded-md 
            transition-colors duration-800 ease-in ${open ? 'top-20': 'top-[-490px]'}
              md:static md:flex md:items-center md:pb-0 md:w-fit md:h-fit md:pr-0`}>
              {
              links.map((link)=>(
                <li className='md:ml-8 md:my-0 my-7' key={link.id}>
                  {link.internal ? (
                    <Link
                    className='text-[16px] text-[#cba042] font-medium hover:text-[#6e7975]' 
                    href=''
                    to={link.id}
                    target={link.target}
                    type={link.type}
                    rel={link.rel}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleButton}
                    >
                      {link.name}
                    </Link>
                  ):(
                    <a href={link.link}
                    className='text-[16px] text-[#cba042] font-medium hover:text-[#6e7975]'
                    target={link.target}
                    type={link.type}
                    rel={link.rel}
                    onClick={handleButton}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))
              }
            <div className='pl-2'>
              <Toggle />
            </div>
            </ul>
        </nav>
  )
}

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer () {
    return (
        <>
        <div className='bg-white dark:bg-gray-900 text-gray-400 relative md:static w-86 grid p-2 
            inset-x-0 bottom-0 border-double border-2 shadow-md
            md:flex flex-col md:justify-between md:w-full'>
            
            <p className='font-bold w-fit'>Rio de janeiro/RJ</p>
                <div className='flex flex-row justify-start w-fit space-x-1'>
                    <div className='flex flex-row'>
                        <a href="mailto:herikrosa@hotmail.com" target='_blank' className='hover:text-white cursor-pointer'>
                            <MdEmail className='mt-1 text-xl hover:text-[#cba042]' /></a>
                        <p>herikrosa@hotmail.com</p>
                    </div>
                    <div className='w-fit text-[22px] hover:text-[#cba042] cursor-pointer'>
                        <a href='https://www.instagram.com/studio.dalvacampos?igsh=ZDl4cDV1Z3BoenYw' target='_blank'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                    <div className='flex items-end pt-1 pr-0 space-x-2'>
                        <input type="text" placeholder='Digite seu e-mail' className="flex row-span-3 p-2 bg-[#6e7975] text-gray-900 border border-gray-300 rounded-lg
                        focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        
                        <button className="relative rounded-lg bg-[#cba042] font-sans text-[14px] 
                        text-gray-900 transition-all hover:shadow-lg
                        hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
                        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <p className='uppercase p-2'>Me inscrever</p>
                        </button>
                    </div>
            
            <div className="border-white py-4">
                <h6 className='absolute right-4 font-bold upercase'>
                © 2024 <a href='https://www.instagram.com/_hliki/' target='_blank'>Hliki</a>. Todos os direitos reservados.</h6>
            </div>
        </div>
        </>
    )
}

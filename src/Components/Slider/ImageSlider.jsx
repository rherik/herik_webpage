import { useState } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function ImageSlider({ imgs_url }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function showNext(){
        setCurrentIndex(index => {
            if (index === imgs_url.length -1) return 0
            return index +1
        })
    }
    function showPrev(){
        setCurrentIndex(index => {
            if (index === 0) return imgs_url.length -1
            return index -1
        })
    }
    return (
        <div className='flex items-center relative overflow-hidden transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl'>
            <img src={imgs_url[currentIndex]} alt="" 
            className="w-[420px] h-[460px] rounded-3xl shadow-2xl" />
            <p class="absolute px-4 text-lg bottom-6 text-white">Palestra sobre carreira em TI no C.E. Charles Dickens.</p>
            <div className='flex flex-row'>
                <button className='absolute left-1 text-gray-800 h-7 w-5 justify-center rounded-xl bg-gray-200 hover:bg-white duration-300 ease-in-out' onClick={showPrev}>
                    <SlArrowLeft /></button>
                <button className='absolute right-1 text-gray-800 h-7 w-5 rounded-xl bg-gray-200 hover:bg-white duration-300 ease-in-out' onClick={showNext}>
                    <SlArrowRight /></button>
            </div>
        </div>
    )
}
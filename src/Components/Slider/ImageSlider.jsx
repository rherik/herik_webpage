import { useState } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function ImageSlider({ imgs_url }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function showNext(){
        setCurrentIndex(currentIndex => {
            if (currentIndex === imgs_url.length -1) return 0;
            return currentIndex + 1;
        })
    }
    function showPrev(){
        setCurrentIndex(currentIndex => {
            if (currentIndex === 0) return imgs_url.length -1
            return currentIndex - 1
        })
    }
    return (
        <div className='flex items-center overflow-hidden relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 drop-shadow-2xl'>
            <div className="flex transition-transform duration-300 ease-out w-[400px] h-[480px]"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {imgs_url.map((i) => (
                <img src={i} alt=""
                className='rounded-3xl shadow-2xl flex-shrink-0'
            />
        ))}
            </div>
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
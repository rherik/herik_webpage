import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
        <div className='flex items-center md:w-[600] relative' >
            <img src={imgs_url[currentIndex]} alt="" 
            className="w-[405px] h-[420px] rounded-3xl shadow-2xl relative" />
            <div className='flex flex-row'>
                <button className='absolute inline-block left-1 text-yellow-100 w-[1rem] hover:bg-[#0000008a]' onClick={showPrev}><FaArrowLeft /></button>
                <button className='absolute inline-block right-1 text-yellow-100 w-[1rem] hover:bg-[#0000008a]' onClick={showNext}><FaArrowRight /></button>
            </div>
        </div>
    )
}
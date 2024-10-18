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
        <div>
            <img src={imgs_url[currentIndex]} alt="" className="w-[390px] h-[450px] rounded-3xl shadow-2xl" />
            <div className='block relative space-x-[22rem] md:absolute'>
                <button className='' onClick={showPrev}><FaArrowLeft /></button>
                <button className='' onClick={showNext}><FaArrowRight /></button>
            </div>
        </div>
    )
}
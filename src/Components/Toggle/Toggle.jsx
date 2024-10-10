import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRegSun as Sun } from "react-icons/fa";
import { IoIosMoon as Moon } from "react-icons/io";

export default function Toggle () {

    const [theme, setTheme] = useState("light");
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            setIsToggled(false);
        } else {
            document.documentElement.classList.remove("dark");
            setIsToggled(true);
        }
    }, [theme]);
    const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return(
        <div className='relative flex w-fit items-center rounded-full'>
            <div className="relative flex w-fit items-center rounded-full">
                <button className="flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"
                    onClick={handleThemeSwitch}>           
                    {isToggled ? <Sun className={`relative right-2 z-0 text-[#e7da5f]`}/>: <Moon className={`relative left-2.5 z-10 text-[#4a8dc9]`}/>}
                </button>
                
                <div className={`absolute inset-0 flex ${isToggled ? "justify-start" : "justify-end"}`}>
                    <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-6 rounded-full bg-gradient-to-r from-gray-500 to-gray-950"/>
                </div>
            </div>
        </div>
        )
}

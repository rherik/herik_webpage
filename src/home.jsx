import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage'

export default function App () {
  return (
    <>
    <div className='h-screen pt-14 space-y-20 bg-[#F2F0EA] dark:bg-gray-900'>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
    </>
  )
}

import React from 'react'
import MainCarousel from '../../Home/MainCarousel'
import SectionCarousel from '../../Home/SectionCarousel'
import Footer from '../../Footer/Footer'

function Hompage() {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 border border-black flex flex-col justify-center px-4 lg:px-6 ' >
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
        </div>
        <Footer/>
    </div>
  )
}

export default Hompage
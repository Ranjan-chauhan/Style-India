import React from 'react'
import MainCarousel from './MainCarousel'
import SectionCarousel from './SectionCarousel'
import Footer from '../Footer/Footer'

function HomePage() {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-5 py-5 flex flex-col justify-center px-4 lg:px-6 ' >
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
            <SectionCarousel/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage
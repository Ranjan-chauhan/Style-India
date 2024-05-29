import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from '@mui/material';

function SectionCarousel() {

    const responsive ={
        0: {items:1},
        720: {items:5},
        1024: {items:6}
    }

    const items = [1,1,1,1,1,1,1,1].map((item, index) =>  <HomeSectionCard key={index}/> )

  return (
    <div className=''>
        <div className=' flex p-4 border border-black '>
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls

          />
          <Button variant="contained" className="z-50"  sx={{right:"3rem",marginY:"auto",
          transform:"rotate(-90deg)"}}>
          <NavigateNextIcon sx={{transform:"rotate(90deg)"}}/>
          </Button>
    </div>
    
    </div>
    
  )
}

export default SectionCarousel
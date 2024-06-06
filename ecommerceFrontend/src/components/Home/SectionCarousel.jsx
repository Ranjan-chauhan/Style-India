import  { React, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
    1440: { items: 5.5 },
  };

  const slidePrev = () => {setActiveIndex(activeIndex - 1)};
  const slideNext = () => {setActiveIndex(activeIndex + 1)};

  const items = [1, 1, 1, 1, 1, 1, 1, 1].map((items, index) => (
    <HomeSectionCard key={index} />
  ));

  return (
    <div className=" px-5x">
      <div className=" relative p-4">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
        />
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            right: "0rem",
            top: "45%",
            bgcolor: "white",
            transform: "translateX(50%) rotate(-90deg)",
          }}
        >
          <NavigateNextIcon
            sx={{ transform: "  rotate(90deg)", color: "black" }}
          />
        </Button>

        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            left: "0rem",
            top: "45%",
            bgcolor: "white",
            transform: "translateX(-50%) rotate(90deg)",
          }}
        >
          <NavigateNextIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
}

export default SectionCarousel;

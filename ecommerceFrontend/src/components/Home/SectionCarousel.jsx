import  { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import { mens_kurta } from "../../assets/mens_kurta";

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

  // const syncActiveIndex = ({item}) => setActiveIndex(item)

  const items = mens_kurta.slice(0,10).map((item, index) => (
    <HomeSectionCard key={index} product={item}/>
  ));

  return (
    <div className="px-3 w-auto ">
      <div className=" relative p-4">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          // onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

      {activeIndex !== items.length - 5 && (
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            right: "-0.7rem",
            top: "45%",
            bgcolor: "white",
            transform: "translateX(50%) rotate(-90deg)",
          }}
        >
          <NavigateNextIcon
            sx={{ transform: "  rotate(90deg)", color: "black" }}
          />
        </Button>
      )}

      {activeIndex !== 0 && (
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
      )}
      </div>
    </div>
  );
}

export default SectionCarousel;

import React, { useState, useEffect, useRef } from "react";
import { ITEM_IMG_CDN_URL } from "../Constant";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarouselBtn from "./CarouselBtn";

const Carousel = ({ carouselCards }) => {
  // Initialize hooks at the top level
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Handle edge case: empty or invalid `carouselCards`
  const isValidCarousel = carouselCards && Array.isArray(carouselCards);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    if (carousel.current) {
      const calculatedMaxIndex =
        Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) -
        1;
      setMaxIndex(calculatedMaxIndex);

      if (currentIndex < calculatedMaxIndex) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  // Return null for invalid or empty carouselCards
  if (!isValidCarousel) return null;

  return (
    <div className="w-11/12 h-64 md:h-48 flex flex-col mt-10 md:mt-5">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold text-xl pl-4 p-5">What's on your mind?</h3>
        <div className="flex gap-4">
          <CarouselBtn
            onClick={movePrev}
            disabled={currentIndex === 0}
            icon={faArrowLeft}
          />
          <CarouselBtn
            onClick={moveNext}
            disabled={currentIndex >= maxIndex}
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="w-full h-52 md:h-48 relative overflow-hidden">
        <div
          ref={carousel}
          className="h-full md:h-auto pl-5 flex gap-8 md:gap-2 overflow-hidden scroll-smooth"
        >
          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="object-center h-full w-52 md:w-24 md:h-[65%] transition-transform hover:scale-110 duration-200 mix-blend-multiply cursor-pointer"
              src={ITEM_IMG_CDN_URL + carouselCard.imageId}
              alt="card img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

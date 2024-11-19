import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ITEM_IMG_CDN_URL } from "../Constant"; // Importing the CDN URL from constants

const Carousel = ({ carouselCards }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    // Calculate max index based on the number of visible items
    if (carouselRef.current) {
      const visibleWidth = carouselRef.current.offsetWidth;
      const totalWidth = carouselRef.current.scrollWidth;
      const itemsPerView = Math.floor(totalWidth / visibleWidth);
      setMaxIndex(carouselCards.length - itemsPerView);
    }
  }, [carouselCards]);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const moveNext = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <div className="w-full relative overflow-hidden p-6" >
      {/* Carousel Header */}
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-2xl  font-bold">What's on your mind?</h2>
        <div className="flex space-x-4">
          <button
            onClick={movePrev}
            disabled={currentIndex === 0}
            className={`h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={moveNext}
            disabled={currentIndex >= maxIndex}
            className={`h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center ${
              currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <div
        ref={carouselRef}
        className="flex gap-12 overflow-x-hidden scroll-smooth"
      >
        {carouselCards.map((card) => (
        <div
        key={card.id}
        className="flex-shrink-0 w-44 h-44 bg-gray-100 flex flex-col items-center justify-center rounded-md overflow-hidden shadow-md transition-transform hover:scale-105 duration-300"
      >
        <img
          src={`${ITEM_IMG_CDN_URL}${card.imageId}`} // Using CDN URL with `imageId`
          alt="carousel"
          className="w-36 h-36 object-contain bg-white rounded-full border-2 border-gray-300 shadow-sm"
        />
        
      </div>
      
      
        ))}
      </div>
    </div>
  );
};

export default Carousel;

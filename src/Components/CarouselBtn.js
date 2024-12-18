import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel";

const CarouselBtn = ({ onClick, disabled, icon }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 w-10 md:h-5 md:w-5 text-center rounded-full bg-[#1c1c24] text-white flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-yellow-300 active:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CarouselBtn;
import bgpic from './img/bg2.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Delicious Meals Delivered to You
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          Explore the best restaurants, cafes, and cuisines in Greater Noida.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

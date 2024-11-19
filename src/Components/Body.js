import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import HeroSection from "./Herosection";
import useOnline from "../CustomHooks/useOnline";
import {
  filterData,
  ratingFilter,
  filterFastDelivery,
  filterLowPrice,
  filterMidPrice,
  filterPureVeg,
} from "../Utils/FilterRestaurant";
import { swiggy_restaurant_details } from "../Constant";

const Body = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isRatingFiltered, setIsRatingFiltered] = useState(false);
  const [isFastDeliveryFiltered, setIsFastDeliveryFiltered] = useState(false);
  const [isLowPriceFiltered, setIsLowPriceFiltered] = useState(false);
  const [isMidPriceFiltered, setIsMidPriceFiltered] = useState(false);
  const [isPureVegFiltered, setIsPureVegFiltered] = useState(false);

  // Fetching restaurants data
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(swiggy_restaurant_details);
      const json = await data.json();

      const resData = json?.data?.cards
        .map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        .find((item) => item !== undefined);

      setAllRestaurants(resData || []);
      setFilteredRestaurants(resData || []);
      setCarouselCards(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  // Check if the user is online
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1>🔴 Oops! Seems like you’re offline. Please check your internet connection. 🔴</h1>
    );
  }

  // Handle search functionality
  const handleSearch = (searchText) => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (loading) return <Shimmer cards={20} />;

  return (
    <>
      <HeroSection />
      <Carousel carouselCards={carouselCards} />
      <div className="divider">
        <hr className="border-[1px] bg-[rgb(240, 240, 245)] m-5 sm:m-2"></hr>
      </div>

      {/* Filter Section */}
      <div className="filter-section bg-gray-100 p-4 rounded-lg shadow-md mx-4 my-6">
        
        <div className="flex flex-wrap justify-center gap-4">
          {/* Rating Filter */}
          <button
            className={`filter-btn px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 ${
              isRatingFiltered
                ? "bg-orange-500 text-white"
                : "bg-white border border-orange-500 text-orange-500"
            }`}
            onClick={() => {
              if (isRatingFiltered) {
                setFilteredRestaurants(allRestaurants);
                setIsRatingFiltered(false);
              } else {
                ratingFilter(filteredRestaurants, setFilteredRestaurants);
                setIsRatingFiltered(true);
              }
            }}
          >
            Ratings 4.3+
            {isRatingFiltered && <span className="ml-2 text-sm">&#10005;</span>}
          </button>

          {/* Fast Delivery Filter */}
          <button
            className={`filter-btn px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 ${
              isFastDeliveryFiltered
                ? "bg-green-500 text-white"
                : "bg-white border border-green-500 text-green-500"
            }`}
            onClick={() => {
              if (isFastDeliveryFiltered) {
                setFilteredRestaurants(allRestaurants);
                setIsFastDeliveryFiltered(false);
              } else {
                filterFastDelivery(filteredRestaurants, setFilteredRestaurants);
                setIsFastDeliveryFiltered(true);
              }
            }}
          >
            Fast Delivery
            {isFastDeliveryFiltered && <span className="ml-2 text-sm">&#10005;</span>}
          </button>

          {/* Pure Veg Filter */}
          <button
            className={`filter-btn px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 ${
              isPureVegFiltered
                ? "bg-green-700 text-white"
                : "bg-white border border-green-700 text-green-700"
            }`}
            onClick={() => {
              if (isPureVegFiltered) {
                setFilteredRestaurants(allRestaurants);
                setIsPureVegFiltered(false);
              } else {
                filterPureVeg(filteredRestaurants, setFilteredRestaurants);
                setIsPureVegFiltered(true);
              }
            }}
          >
            Pure Veg
            {isPureVegFiltered && <span className="ml-2 text-sm">&#10005;</span>}
          </button>

          {/* Low Price Filter */}
          <button
            className={`filter-btn px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 ${
              isLowPriceFiltered
                ? "bg-blue-500 text-white"
                : "bg-white border border-blue-500 text-blue-500"
            }`}
            onClick={() => {
              if (isLowPriceFiltered) {
                setFilteredRestaurants(allRestaurants);
                setIsLowPriceFiltered(false);
              } else {
                filterLowPrice(filteredRestaurants, setFilteredRestaurants);
                setIsLowPriceFiltered(true);
              }
            }}
          >
            Less than ₹300
            {isLowPriceFiltered && <span className="ml-2 text-sm">&#10005;</span>}
          </button>

          {/* Mid Price Filter */}
          <button
            className={`filter-btn px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 ${
              isMidPriceFiltered
                ? "bg-purple-500 text-white"
                : "bg-white border border-purple-500 text-purple-500"
            }`}
            onClick={() => {
              if (isMidPriceFiltered) {
                setFilteredRestaurants(allRestaurants);
                setIsMidPriceFiltered(false);
              } else {
                filterMidPrice(filteredRestaurants, setFilteredRestaurants);
                setIsMidPriceFiltered(true);
              }
            }}
          >
            ₹300 - ₹600
            {isMidPriceFiltered && <span className="ml-2 text-sm">&#10005;</span>}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Restaurant List */}
      {filteredRestaurants.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">Sorry! No Restaurant Found</h1>
        </div>
      ) : (
        <div
          className="flex flex-wrap justify-center align-middle mb-16 md:mb-24"
          data-testid="res-list"
        >
          {filteredRestaurants.map((eachRestaurant) => (
            <Link
              className="restaurantMenu-links"
              to={"/restaurant/" + eachRestaurant?.info?.id}
              key={eachRestaurant?.info?.id}
            >
              <RestaurantCard {...eachRestaurant?.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;

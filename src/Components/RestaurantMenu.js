import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import VegNonVeg from '../Utils/VegNonVeg';
import {
  ITEM_IMG_CDN_URL,
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../Constant";
import ResMenuHeader from "./resMenuHeader";
import Shimmer from "./Shimmer";
import useResMenuData from "../CustomHooks/useResMenuData";
import { addItem, removeItem } from '../Utils/cartSlice';
import { toast } from "react-toastify";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Function to check if an item is in the cart
  const isItemInCart = (itemId) => cartItems.some((cartItem) => cartItem.id === itemId);

  // Toggle function for Add/Remove
  const handleToggleCart = (item) => {
    if (isItemInCart(item.id)) {
      dispatch(removeItem(item.id));
      toast.error(`${item.name} removed from cart`);
    } else {
      dispatch(addItem(item));
      toast.success(`${item.name} added to cart`);
    }
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      {/* Restaurant Header */}
      <div className="flex justify-center w-[80%] md:w-auto mt-3 pl-4 md:pl-0 md:m-auto md:mt-4">
        <ResMenuHeader restaurant={restaurant} />
      </div>

      {/* Menu Items Container */}
      <div className="menu-items-container mt-8 w-[90%] mx-auto mb-16">
        <div className="menu-title-wrap p-5 text-center">
          <h3 className="text-2xl font-bold">Choose Your Food</h3>
          <p className="text-gray-500">{menuItems.length} ITEMS</p>
        </div>

        {/* Grid for Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => {
            const inCart = isItemInCart(item.id);

            return (
              <div
                key={item.id}
                className="menu-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                {/* Item Image */}
                {item.imageId && (
                  <img
                    src={ITEM_IMG_CDN_URL + item.imageId}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                )}

                {/* Item Details */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  {/* Veg/Non-Veg Icon */}
                  <div className="flex items-center mb-2">
                    <VegNonVeg itemAttribute={item.itemAttribute} />
                    <h3 className="ml-2 font-bold text-lg text-gray-800">{item.name}</h3>
                  </div>

                  {/* Item Price */}
                  <p className="text-green-700">
                    {item.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item.price / 100)
                      : "Price not available"}
                  </p>

                  {/* Item Description */}
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {item.description ? item.description : "No description available"}
                  </p>

                  {/* Add/Remove Button */}
                  <button
                    className={`mt-4 py-2 px-4 rounded w-24 font-semibold text-white transition duration-300 ${
                      inCart ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                    onClick={() => handleToggleCart(item)}
                  >
                    {inCart ? 'Remove-' : 'Add +'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

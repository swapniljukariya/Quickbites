import React from "react";
import { useSelector } from "react-redux"; // Assuming cart state is in Redux
import { v4 as uuidv4 } from "uuid"; // To generate unique Order IDs
import { ITEM_IMG_CDN_URL } from "../Constant"; // Update with your image URL constants

const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity) / 100; // Assuming price is in paise
  }, 0);
  const orderId = uuidv4().slice(0, 6).toUpperCase(); // Generating a random Order ID

  return (
    <div className="container mx-auto my-8 px-4">

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-green-600">
          ✅ Your Order is Confirmed!
        </h2>
        <p className="text-gray-500 mt-2">
          Sit back while we deliver it in less than 30 minutes!!
        </p>
      </div>

      
      {/* Back to Home Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => (window.location.href = "/")} // Redirect to home
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;

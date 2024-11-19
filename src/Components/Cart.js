import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateCartItemQuantity,
  removeItem,
  clearCart,
} from "../Utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../Constant";
import emptycart from "./img/EmptyCart.png";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  const [isChecked, setIsChecked] = useState(false);

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartItemQuantity({ id: itemId, quantity }));
    } else {
      dispatch(removeItem(itemId));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (!isChecked) {
      alert("Please check the box to proceed to checkout.");
      return;
    }
    navigate("/checkout");
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity) / 100,
    0
  );

  return (
    <div className="container mx-auto p-4">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src={emptycart}
            alt="Cart is empty"
            className="w-40 h-40 md:w-60 md:h-60"
          />
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mt-4 text-center">
            Your Cart is Empty!
          </h2>
          <a
            href="/"
            className="mt-4 text-sm md:text-lg text-green-600 hover:underline"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-xl md:text-3xl font-bold mb-6">
            Your Cart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-2 text-sm md:p-4 text-left">Image</th>
                  <th className="p-2 text-sm md:p-4 text-left">Item Name</th>
                  <th className="p-2 text-sm md:p-4 text-left">Price</th>
                  <th className="p-2 text-sm md:p-4 text-left">Quantity</th>
                  <th className="p-2 text-sm md:p-4 text-left">Total</th>
                  <th className="p-2 text-sm md:p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 md:p-4">
                      <img
                        src={`${ITEM_IMG_CDN_URL}${item.imageId}`}
                        alt={item.name}
                        className="h-12 w-12 md:h-16 md:w-16 rounded-md object-cover"
                      />
                    </td>
                    <td className="p-2 text-sm md:p-4">{item.name}</td>
                    <td className="p-2 text-sm md:p-4">
                      {item.price && !isNaN(item.price)
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item.price / 100)
                        : "₹0.00"}
                    </td>
                    <td className="p-2 md:p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="w-12 md:w-16 p-1 text-sm border rounded text-center"
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="p-2 text-sm md:p-4">
                      {item.price && !isNaN(item.price)
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format((item.price * item.quantity) / 100)
                        : "₹0.00"}
                    </td>
                    <td className="p-2 md:p-4">
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="p-2 text-sm md:p-3 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        <AiFillDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm md:text-lg font-semibold">Total Amount</div>
            <div className="text-sm md:text-lg font-semibold text-green-500">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(totalAmount)}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 md:flex-row justify-between items-center">
            <button
              onClick={handleClearCart}
              className="w-full md:w-auto px-4 py-2 text-sm md:text-base bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <span className="text-sm md:text-base">Proceed to Checkout</span>
              <button
                onClick={handleCheckout}
                className="ml-4 px-4 py-2 text-sm md:text-base bg-green-500 text-white rounded hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

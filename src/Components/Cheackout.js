import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const navigate = useNavigate();

  const addresses = [
    {
      id: 1,
      name: "Swapnil Jukariya",
      phone: "567890222222",
      address: "Sector 148 Noida",
    },
    {
      id: 2,
      name: "Ashish Singh",
      phone: "416107125678388",
      address: "15 Yemen road , Yemen",
    },
    {
      id: 3,
      name: "Vedansh Mittal",
      phone: "92899292992928",
      address: "Mazar-e-quaid-e-Azam Karachi",
    },
    {
      id: 4,
      name: "Srinjoy Manna",
      phone: "38368379379739739",
      address: "Knowledge Park 3, Greater Noida",
    },
  ];

  const paymentMethods = ["Cash on Delivery (COD)", "Credit Card", "UPI"];

  const handleAddressSelection = (id) => {
    const selected = addresses.find((address) => address.id === id);
    setSelectedAddress(selected);
    setShowPaymentSection(false);
    setSelectedPaymentMethod(null);
  };

  const proceedToPayment = () => {
    if (!selectedAddress) {
      alert("Please select an address before proceeding.");
      return;
    }
    setShowPaymentSection(true);
  };

  const placeOrder = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method to place the order.");
      return;
    }

    // Navigate to OrderPlaced with cart and checkout details
    navigate("/order-placed", {
      state: {
        cartItems,
        selectedAddress,
        selectedPaymentMethod,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Checkout
        </h1>

        {/* Address Selection */}
        <h2 className="text-xl font-semibold mb-4">Select your address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              onClick={() => handleAddressSelection(address.id)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedAddress?.id === address.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <p className="font-semibold">{address.name}</p>
              <p>{address.phone}</p>
              <p>{address.address}</p>
            </div>
          ))}
        </div>

        {/* Proceed to Payment Button */}
        <div className="mt-6">
          <button
            onClick={proceedToPayment}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Proceed to Payment
          </button>
        </div>

        {/* Payment Section */}
        {showPaymentSection && (
          <div className="mt-10 p-6 bg-green-100 border border-green-500 rounded-lg">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Payment Section
            </h2>
            <p className="text-green-700">
              You have selected the following address for delivery:
            </p>
            <p className="mt-2">
              <strong>{selectedAddress.name}</strong>
              <br />
              {selectedAddress.phone}
              <br />
              {selectedAddress.address}
            </p>

            {/* Payment Methods */}
            <h3 className="text-lg font-semibold mt-6 mb-2">
              Select Payment Method
            </h3>
            <div className="flex flex-col gap-2">
              {paymentMethods.map((method, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={selectedPaymentMethod === method}
                    onChange={() => setSelectedPaymentMethod(method)}
                  />
                  {method}
                </label>
              ))}
            </div>

            {/* Place Order Button */}
            {selectedPaymentMethod && (
              <div className="mt-6 text-center">
                <button
                  onClick={placeOrder}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-lg m-4 p-6 transition-all duration-300 bg-white">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        {isVisible ? (
          <button
            className="cursor-pointer"
            onClick={() => setIsVisible(null)}
          >
            <FaCaretSquareUp className="text-green-500 text-2xl" />
          </button>
        ) : (
          <button
            className="cursor-pointer"
            onClick={() => setIsVisible(title)}
          >
            <FaCaretSquareDown className="text-green-500 text-2xl" />
          </button>
        )}
      </div>
      {isVisible && (
        <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("aboutYumBite");

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>
      <Section
        title={"What is Quickbites Foods?"}
        description={
          "QuickBite Foods is an online food delivery platform offering a wide variety of cuisines from top restaurants in your city. We focus on providing fresh, delicious meals and a seamless ordering experience for our customers."
        }
        isVisible={visibleSection === "What is Quickbites Foods?"}
        setIsVisible={setIsVisibleSection}
      />
      <Section
        title={"How do I track my order?"}
        description={
          "You can track your order in real-time on the YumBite app or website. Simply navigate to your order history and select the active order to see live updates on its status."
        }
        isVisible={visibleSection === "How do I track my order?"}
        setIsVisible={setIsVisibleSection}
      />
      <Section
        title={"What cuisines are available?"}
        description={
          "YumBite offers a wide range of cuisines, including Indian, Chinese, Italian, Continental, and many more. Whether you're in the mood for spicy street food or gourmet dining, we've got you covered."
        }
        isVisible={visibleSection === "What cuisines are available?"}
        setIsVisible={setIsVisibleSection}
      />
      <Section
        title={"Can I customize my order?"}
        description={
          "Yes, QuickBite allows you to customize your order based on your preferences. You can add special instructions, modify ingredients, or select add-ons while placing your order."
        }
        isVisible={visibleSection === "Can I customize my order?"}
        setIsVisible={setIsVisibleSection}
      />
      <Section
        title={"What is Quickbites 's refund policy?"}
        description={
          "If you cancel an order before it is confirmed by the restaurant, you are eligible for a full refund. Once the restaurant has confirmed the order, cancellations may not be possible. Refunds are processed within 3-5 business days."
        }
        isVisible={visibleSection === "What is Quickbites 's refund policy?"}
        setIsVisible={setIsVisibleSection}
      />
    </div>
  );
};

export default Instamart;

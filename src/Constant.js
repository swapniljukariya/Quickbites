//In React.js, a config.js/constant.js file is often used to store configuration settings, environment variables, or other constants that are used throughout the application. It helps centralize such configurations in one place, making it easier to manage and update them when needed. basically to store hard coded things.
// example api keys, json data(or any hard coded data)

export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

 // Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

//swiggy restaurant details 
export const swiggy_restaurant_details= 
"https://foodfire.onrender.com/api/restaurants/?lat=15.4934622&lng=73.8327136&page_type=DESKTOP_WEB_LISTING";


// Swiggy API to get Restaurant Menu data 
export const swiggy_menu_api_URL =
"https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=15.4909301&lng=73.8278496&&submitAction=ENTER&restaurantId=";

// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const FAQs = [
    {
      id: 1,
      title: "How can I place an order online?",
      description:
        "To place an order, you can visit our website and select the restaurant or cuisine you want to order from. You can then choose the items you want to order and add them to your cart. Once you have selected all the items, you can proceed to checkout and enter your delivery address and payment information to complete the order.",
    },
    {
      id: 2,
      title: "How long does it take for my order to arrive?",
      description:
        "The delivery time may vary depending on your location and the restaurant's availability. You can check the estimated delivery time on the checkout page before confirming your order. Once your order is placed, you will receive updates on its status and expected delivery time.",
    },
    {
      id: 3,
      title: "What if I want to cancel my order?",
      description:
        "You can cancel your order before it is prepared by the restaurant. To cancel an order, you can go to your order history and select the cancel option. If the restaurant has already started preparing your order, cancellation may not be possible. In such cases, please contact our customer support for assistance.",
    },
    {
      id: 4,
      title: "What payment methods do you accept?",
      description:
        "We accept various payment methods including credit/debit cards, online banking, and digital wallets such as UPI, Apple Pay, and Google Pay. You can choose your preferred payment method during checkout.",
    },
    {
      id: 5,
      title: "What if there is an issue with my order?",
      description:
        "If there is an issue with your order, such as missing items or incorrect order, please contact our customer support immediately. We will investigate the issue and take appropriate action to resolve it. In case of any quality issues with the food, please take pictures and share them with us so that we can take necessary steps to prevent it from happening in the future.",
    },
  ];

  export const aboutContent = {
    title: "Get your food delivery without the hassle!",
    description:
      "Go Foods was founded with a simple mission: to make it easier for people to get their food delivered. With a food delivery app in India, they make it easy for people to order food from their favorite restaurants and have it delivered right to their door. They work with some of the best restaurants in the area, so people can always get the food they want, when they want it. Whether they're in the mood for Indian food, Italian food, or something else, Go Foods has them covered. Plus, they offer great discounts on food delivery when people order through the app. With Go Foods, there's no need to go out to eat; they can bring the restaurant to you.",
  };
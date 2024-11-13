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


// //goa swiggy menu
// "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.4909301&lng=73.8278496&&submitAction=ENTER&restaurantId=";
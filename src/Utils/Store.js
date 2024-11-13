import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

//we have used reduxtoolkit to create redux store
const store =configureStore({
reducer:{
    cart:cartSlice,
 },
});

export default store;
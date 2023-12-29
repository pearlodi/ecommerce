import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"
import wishReducer from "./redux/WishSlice"


export default configureStore({
    reducer:{
        cart:cartReducer,
        wish:wishReducer


    }
})

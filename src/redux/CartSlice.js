// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartKey = "cart";

const initialCartState = JSON.parse(localStorage.getItem(cartKey)) || {
  cart: [],
  selectedCategory: null,
  selectedPrice: null,
  selectedColor: null,
  notification: {
    message: '',
    show: false,
  },
};

export const setCategoryFilter = (category) => (dispatch) => {
  dispatch(updateCategoryFilter(category));
};
export const setPriceFilter = (price) => (dispatch) => {
  dispatch(updatePriceFilter(price));
};
export const setColorFilter = (color) => (dispatch) => {
  dispatch(updateColorFilter(color));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    updateCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;
      state.selectedPrice = null; 
      state.selectedColor = null; 
    },
    updatePriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
      state.selectedCategory = null; 
      state.selectedColor = null; 
    },
    updateColorFilter: (state, action) => {
      state.selectedColor = action.payload;
      state.selectedCategory = null; 
      state.selectedPrice = null; 
    },
    addToCart: (state, action) => {

      const newItem = { ...action.payload, quantity: 1 }; // Create a new object with quantity set to 1
      state.cart.push(newItem);
      localStorage.setItem(cartKey, JSON.stringify(state));

      state.notification = { message: action.payload.message || "Product added to cart", show: true };
    
    },
    hideNotification: (state) => {
      state.notification = { message: '', show: false };
    },
    removeFromCart: (state, action) => {
      const removedItemId = action.payload.id;
      state.cart = state.cart.map((item) => {
        if (item.id === removedItemId) {
          return { ...item, quantity: 0 }; // Create a new object with quantity set to 0 for the removed item
        }
        return item;
      });
      state.cart = state.cart.filter((item) => item.id !== removedItemId);
      localStorage.setItem(cartKey, JSON.stringify(state));
      state.notification = { message: action.payload.message || "Product removed to cart", show: true };
    },

    

    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem(cartKey, JSON.stringify(state));
      }
    },
    initializeCart: (state, action) => {
      return action.payload;
    },
    clearCart: (state) => {
      state.cart = []; // Empty the cart array
      localStorage.setItem(cartKey, JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  initializeCart,
  updateCategoryFilter,
  updatePriceFilter,
  addTowish,
  removeFromwish,
  clearCart,
  updateColorFilter,
  hideNotification,
} = cartSlice.actions;
export default cartSlice.reducer;

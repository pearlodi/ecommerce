// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const wishKey = "wish";

const initialWishstate = JSON.parse(localStorage.getItem(wishKey)) || {
  wish: [],
  selectedWishCategory: null,
  selectedWishPrice: null,
  selectedWishColor: null,
  notification: {
    message: '',
    show: false,
  },
};

export const setCategoryWishFilter = (category) => (dispatch) => {
  dispatch(updateCategoryWishFilter(category));
};
export const setPriceWishFilter = (price) => (dispatch) => {
  dispatch(updatePriceWishFilter(price));
};
export const setColorWishFilter = (color) => (dispatch) => {
  dispatch(updateColorWishFilter(color));
};

const wishSlice = createSlice({
  name: "wish",
  initialState: initialWishstate,
  reducers: {
    updateCategoryWishFilter: (state, action) => {
      state.selectedWishCategory = action.payload;
    },
    updatePriceWishFilter: (state, action) => {
      state.selectedWishPrice = action.payload;
    },
    updateColorWishFilter: (state, action) => {
      state.selectedWishColor = action.payload;
    },

    addToWish: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 }; // Create a new object with quantity set to 1
      state.wish.push(newItem);
      localStorage.setItem(wishKey, JSON.stringify(state));
      state.notification = { message: action.payload.message || "Product added to cart", show: true };
    },
    hideNotifications: (state) => {
      state.notification = { message: '', show: false };
    },
    removeFromWish: (state, action) => {
      const removedItemId = action.payload.id;
      state.wish = state.wish.map((item) => {
        if (item.id === removedItemId) {
          return { ...item, quantity: 0 }; // Create a new object with quantity set to 0 for the removed item
        }
        return item;
      });
      state.wish = state.wish.filter((item) => item.id !== removedItemId);
      localStorage.setItem(wishKey, JSON.stringify(state));

      state.notification = { message: action.payload.message || "Product removed to wish list", show: true };
    },

    incrementWishQuantity: (state, action) => {
      const item = state.wish.find((i) => i.id === action.payload.id);

      item.quantity++;
      // localStorage.setItem(wishKey, JSON.stringify(state));
    },
    decrementWishQuantity: (state, action) => {
      const item = state.wish.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem(wishKey, JSON.stringify(state));
      }
    },

    initializeWish: (state, action) => {
      return action.payload;
    },

    clearWish: (state) => {
      state.wart = []; // Empty the cart array
      localStorage.setItem(wishKey, JSON.stringify(state));
    },
  },
});

export const {
  addToWish,
  removeFromWish,
  incrementWishQuantity,
  decrementWishQuantity,
  initializeCart,
  updateCategoryWishFilter,
  updatePriceWishFilter,
  addTowish,
  removeFromwish,
  clearWish,
  updateColorWishFilter,
  hideNotifications,

} = wishSlice.actions;
export default wishSlice.reducer;

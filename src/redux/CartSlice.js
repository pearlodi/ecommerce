// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';
import item from '../Array';

const cartKey = 'cart';
const wishKey = 'wish';

const initialCartState = JSON.parse(localStorage.getItem(cartKey)) || { cart: [],   selectedCategory: null, selectedPrice:null  };

const initialWishState = JSON.parse(localStorage.getItem(wishKey)) || { wish: [],   selectedCategory: null, selectedPrice:null  };

export const setCategoryFilter = (category) => (dispatch) => {
  dispatch(updateCategoryFilter(category));
};
export const setPriceFilter = (price) => (dispatch) => {
  dispatch(updatePriceFilter(price));
};


const cartSlice = createSlice({
  name: 'cart',
  names: 'wish',
  initialState: initialCartState,
  initialWish: initialWishState,
  reducers: {
    
    updateCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;
    },
    updatePriceFilter: (state, action) => {
      state.selectedPrice = action.payload;
    },
    // addToCart: (state, action) => {
    //   state.cart.push(action.payload);
    //   localStorage.setItem(cartKey, JSON.stringify(state));
    // },
    addToCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 }; // Create a new object with quantity set to 1
      state.cart.push(newItem);
      localStorage.setItem(cartKey, JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const removedItemId = action.payload.id;
      state.cart = state.cart.map(item => {
        if (item.id === removedItemId) {
          return { ...item, quantity: 0 }; // Create a new object with quantity set to 0 for the removed item
        }
        return item;
      });
      state.cart = state.cart.filter(item => item.id !== removedItemId);
      localStorage.setItem(cartKey, JSON.stringify(state));
    },
    
    addTowish: (state, action) => {
      state.wish.push(action.payload);
      localStorage.setItem(wishKey, JSON.stringify(state));
    },
    removeFromwish: (state, action) => {
      state.wish = state.wish.filter((item) => item.id !== action.payload.id);
      localStorage.setItem(wishKey, JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
     
        item.quantity++;
        // localStorage.setItem(cartKey, JSON.stringify(state));
      
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

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, initializeCart, updateCategoryFilter, updatePriceFilter, addTowish, removeFromwish, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

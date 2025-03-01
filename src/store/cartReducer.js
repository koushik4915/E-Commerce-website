import { createSlice } from "@reduxjs/toolkit";

const findIndex = (state, action) => {
  return state.findIndex((cartItem) => cartItem.productId === action.payload.productId);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findIndex(state, action);
      if (existingItemIndex !== -1) {
        state.splice(existingItemIndex, 1);
      }
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      }
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
      }
    }
  }
});

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer; 

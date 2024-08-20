import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

const initialState = {
  items: loadState(), // Load initial state from localStorage
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveState(state.items); // Save the updated state to localStorage
    },
    removeFromCart: (state, action) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
        saveState(state.items); // Save the updated state to localStorage
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveState(state.items); // Save the updated state to localStorage
    },
  },
});

export const { addToCart, removeFromCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

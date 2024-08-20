import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import products from "./reducers/products";
import cart from "./reducers/cart";

export const store = configureStore({
  reducer: {
    user,
    products,
    cart
  },
});

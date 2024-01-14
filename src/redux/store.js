import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

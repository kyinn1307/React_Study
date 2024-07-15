import { configureStore } from "@reduxjs/toolkit";
import cart from "./store/useSlice";

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

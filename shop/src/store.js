import { configureStore } from "@reduxjs/toolkit";
import basket from "./store/useSlice";

export default configureStore({
  reducer: {
    basket: basket.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    addItem(state, action) {
      let existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count++;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export let { addCount, addItem } = cart.actions;
export default cart;

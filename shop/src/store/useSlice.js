import { createSlice } from "@reduxjs/toolkit";

let basket = createSlice({
  name: "basket",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeName(state) {
      state[0].name = "park";
    },
    increase(state, action) {
      state[action.payload].count++;
    },
  },
});

export let { changeName, increase } = basket.actions;
export default basket;

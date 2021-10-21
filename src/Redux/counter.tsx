import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    inbox: 0,
  },
  reducers: {
    increment: (state) => {
      state.inbox += 1;
    },
    decrement: (state) => {
      state.inbox -= 1;
    },
    length: (state, action) => {
      state.inbox = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, length } = counterSlice.actions;

export default counterSlice.reducer;

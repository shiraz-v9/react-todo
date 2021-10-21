import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "reduxTask",
  initialState: {
    count: 0,
    list: [],
  },
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addTask: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inc, decrement, addTask } = taskSlice.actions;

export default taskSlice.reducer;

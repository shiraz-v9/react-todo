import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "reduxTask",
  initialState: {
    list: [],
    smartlist: "inbox",
  },
  reducers: {
    addTask: (state, action) => {
      state.list = action.payload;
    },
    setInbox: (state) => {
      state.smartlist = "inbox";
    },
    setToday: (state) => {
      state.smartlist = "today";
    },
    setTomorrow: (state) => {
      state.smartlist = "tomorrow";
    },
    setNext7: (state) => {
      state.smartlist = "next 7";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, setInbox, setToday, setTomorrow, setNext7 } =
  taskSlice.actions;

export default taskSlice.reducer;

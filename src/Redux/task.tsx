import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../components/interfaces";

export const taskSlice = createSlice({
  name: "reduxTask",
  initialState: {
    list: [] as ITask[],
    smartlist: "inbox",
    listID: -1,
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
    setID: (state, action) => {
      state.listID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, setInbox, setToday, setTomorrow, setNext7, setID } =
  taskSlice.actions;

export default taskSlice.reducer;

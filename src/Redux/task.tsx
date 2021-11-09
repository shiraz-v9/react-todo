import { createSlice } from "@reduxjs/toolkit";
import { IDeadline, ITask } from "../components/interfaces";

export const taskSlice = createSlice({
  name: "reduxTask",
  initialState: {
    list: [] as ITask[],
    smartlist: "inbox",
    deadlines: [] as IDeadline[],
    events: [],
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
    upcoming: (state) => {
      state.smartlist = "upcoming";
    },
    taskDeadline: (state, action) => {
      state.deadlines = action.payload;
    },
    RBCEvent: (state, action) => {
      state.events = action.payload;
    },
    setID: (state, action) => {
      state.listID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  setInbox,
  setToday,
  setTomorrow,
  upcoming,
  taskDeadline,
  RBCEvent,
  setID,
} = taskSlice.actions;

export default taskSlice.reducer;

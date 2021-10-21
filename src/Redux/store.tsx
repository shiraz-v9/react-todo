import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import taskReducer from "./task";

export const store = configureStore({
  reducer: { counter: counterReducer, reduxTask: taskReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

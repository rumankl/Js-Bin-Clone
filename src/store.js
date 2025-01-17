import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./posts/postSlice";



const store = configureStore({
  // reducer: {
  //   [postSlice.name]: postSlice.reducer
  // }
  reducer: {
    posts: postSlice.reducer,
  }

});
export default store
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/postSlice"; // Import the reducer (default export)

const store = configureStore({
  reducer: {
    posts: postReducer, // Assign the reducer to a slice of state
  },
});

export default store;







// import { configureStore } from "@reduxjs/toolkit";
// import { postSlice } from "./posts/postSlice";
// const store = configureStore({
//   // reducer: {
//   //   [postSlice.name]: postSlice.reducer
//   // }
//   reducer: {
//     posts: postSlice.reducer,
//   }

// });
// export default store



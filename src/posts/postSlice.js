// import { createSlice } from "@reduxjs/toolkit";

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     posts: [],
//   },
//   reducers: {
//     addPost: (state, action) => {
//       state.posts.push(action.payload);
//     },
//   },
// });

// export const { addPost } = postSlice.actions; // Export the action creator
// export default postSlice.reducer; // Export the reducer as default








// import { createSlice } from "@reduxjs/toolkit";
// import { getPostsFromLocal, setPostsToLocal } from "../localstorage";


// export const postSlice = createSlice({
//   name: 'postSlice',
//   initialState: {
//     posts: getPostsFromLocal()
//   },
//   reducers: {

//     addPost: (state, action) => {
//       state.posts.push(action.payload);
//       setPostsToLocal(state.posts)
//     }


//   }
// });

// export const { addPost } = postSlice.actions;


import { createSlice } from "@reduxjs/toolkit";

// Get posts from localStorage
const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: savedPosts, // Initialize state with saved posts
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts)); // Save posts to localStorage
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;

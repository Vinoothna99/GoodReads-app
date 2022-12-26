import {createSlice} from "@reduxjs/toolkit";
import {createPostThunk, getPostsByAuthorThunk, getPostsByAuthorAndWorkIDThunk, deletePostThunk} from "./posts-thunks";

const initialState = {
  posts: [],
  user_posts: [],
  error: null
}

const postsReducer = createSlice({
  name: 'posts',
  initialState: initialState,
  extraReducers: {
    [createPostThunk.fulfilled]: (state, action) => {
      // state.reviews.push(action.payload);
    },
    [createPostThunk.pending]: (state, action) => {
      state.error = null;
    },
    [createPostThunk.rejected]: (state, action) => {
      state.error = "You must be logged in to post a review"
    },
    [getPostsByAuthorAndWorkIDThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getPostsByAuthorThunk().fulfilled]: (state, action) => {
      state.user_posts = action.payload;
    },
    [deletePostThunk.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(post => post._id !== action.payload);
    },
  }
})

export default postsReducer.reducer;
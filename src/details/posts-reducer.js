import {createSlice} from "@reduxjs/toolkit";
import {postPostThunk, getPostsByWorkIDThunk, getPostsByUserIDThunk, deletePostThunk, getPostsThunk} from "./post-thunks";

const initialState = {
    posts: [],
    user_posts: [],
    error: null,
    recent_posts: []
}

const postsReducer = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: {
        [postPostThunk.fulfilled]: (state, action) => {
            // state.posts.push(action.payload);
        },
        [postPostThunk.pending]: (state, action) => {
            state.error = null;
        },
        [postPostThunk.rejected]: (state, action) => {
            state.error = "You must be logged in to create a discussion post"
        },
        [getPostsThunk.fulfilled]: (state, action) => {
            state.recent_posts = action.payload;
        },
        [getPostsByWorkIDThunk.fulfilled]: (state, action) => {
            state.posts = action.payload;
        },
        [getPostsByUserIDThunk.fulfilled]: (state, action) => {
            state.user_posts = action.payload;
        },
        [deletePostThunk.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload);
        },
    }
})

export default postsReducer.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {
    postReviewThunk,
    getReviewsByWorkIDThunk,
    getReviewsByUserIDThunk,
    deleteReviewThunk,
    getReviewsThunk
} from "./review-thunks";

const initialState = {
    reviews: [],
    user_reviews: [],
    error: null,
    recent_reviews: []
}

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: initialState,
    extraReducers: {
        [postReviewThunk.fulfilled]: (state, action) => {
            // state.reviews.push(action.payload);
        },
        [postReviewThunk.pending]: (state, action) => {
            state.error = null;
        },
        [postReviewThunk.rejected]: (state, action) => {
            state.error = "You must be logged in to post a review"
        },
        [getReviewsThunk.fulfilled]: (state, action) => {
            state.recent_reviews = action.payload;
        },
        [getReviewsByWorkIDThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload;
        },
        [getReviewsByUserIDThunk.fulfilled]: (state, action) => {
            state.user_reviews = action.payload;
        },
        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.reviews = state.reviews.filter(review => review._id !== action.payload);
        }
    }
})

export default reviewsReducer.reducer;
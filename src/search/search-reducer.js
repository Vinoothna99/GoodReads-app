import {createSlice} from "@reduxjs/toolkit";
import {findBooksThunk} from "../services/open-library-thunks";

const initialState = {
    bookSearchResults: []
}

const bookSearchReducer = createSlice({
    name: 'books',
    initialState: initialState,
    extraReducers: {
        [findBooksThunk.fulfilled]: (state, action) => {
            state.bookSearchResults = action.payload;
        }
    }
})

export default bookSearchReducer.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";

const initialState = {
    bookDetails: []
}

const bookDetailsReducer = createSlice({
    name: 'bookDetails',
    initialState: initialState,
    extraReducers: {
        [findBookByWorkIDThunk.fulfilled]: (state, action) => {
            state.bookDetails = action.payload;
        }
    }
})

export default bookDetailsReducer.reducer;
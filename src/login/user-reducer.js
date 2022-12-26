import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    profileThunk,
    publicProfileThunk,
    registerThunk
} from "./user-thunks";
import {updateProfile} from './user-service';

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

        updateUserInfo: (state, action) => {
            console.log('update', state, action)
            state.currentUser = action.payload
        }
    },
    extraReducers: {
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [registerThunk.pending]: (state, action) => {
            state.error = null;
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = "Error: This user already exists, try again";
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [loginThunk.pending]: (state, action) => {
            state.error = null;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = "Error: This user does not exist, try again or register for an account";
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [publicProfileThunk.pending]: (state, action) => {
            state.loading=true
        },
        [publicProfileThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
            state.loading=false
        },
    }
})
export const { updateUserInfo } = userReducer.actions

export default userReducer.reducer;
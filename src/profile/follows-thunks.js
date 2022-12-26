import {createAsyncThunk} from "@reduxjs/toolkit";
import {followUser, getFollowersByUserID, getFollowingByUserID} from "./follows-service";

export const followUserThunk = createAsyncThunk('followUser',
    (follow) => followUser(follow));

export const getFollowersByUserIDThunk = createAsyncThunk('getFollowersByUserIDThunk',
    (followed) => getFollowersByUserID(followed));

export const getFollowingByUserIDThunk = createAsyncThunk('getFollowingByUserID',
    (follower) => getFollowingByUserID(follower));
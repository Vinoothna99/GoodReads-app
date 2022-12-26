import {createAsyncThunk} from "@reduxjs/toolkit";
import {postPost, getPostsByWorkID, getPostsByUserID, deletePost, getPosts} from "./post-service";

export const postPostThunk = createAsyncThunk('postPost',
    async (post) => await postPost(post));

export const getPostsByWorkIDThunk = createAsyncThunk('getPostsByWorkID',
    async (workID) => await getPostsByWorkID(workID));

export const getPostsByUserIDThunk = createAsyncThunk('getPostsByUserID',
    async (userID) => await getPostsByUserID(userID));

export const deletePostThunk = createAsyncThunk('deletePost',
    async (postID) => await deletePost(postID));

export const getPostsThunk = createAsyncThunk('getPosts',
    async () => await getPosts());
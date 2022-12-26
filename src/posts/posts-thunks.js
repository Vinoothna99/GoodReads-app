import {createAsyncThunk} from "@reduxjs/toolkit";
import {createPost,deletePost,getPostsByAuthorAndWorkID,getPostsByAuthor} from "./posts-service";

export const createPostThunk = createAsyncThunk('createPost',
    async (post) => await createPost(post));

export const getPostsByAuthorAndWorkIDThunk = createAsyncThunk('getPostsByAuthorAndWorkID',
    async (author,workID) => await getPostsByAuthorAndWorkID(author,workID));

export const getPostsByAuthorThunk = createAsyncThunk('getReviewsByAuthor',
    async (author) => await getPostsByAuthor(author));

export const deletePostThunk = createAsyncThunk('deleteReview',
    async (postID) => await deletePost(postID));
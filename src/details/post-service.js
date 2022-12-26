import axios from "axios";

const POST_API_BASE = "http://localhost:4000/api/posts";
const BOOK_POSTS_API_BASE = "http://localhost:4000/api/books";
const credentialAPI = axios.create({withCredentials: true});

export const postPost = async (post) => {
    const response = await credentialAPI.post(`${POST_API_BASE}`, post);
    return response.data;
}

export const getPostsByWorkID = async (workID) => {
    const response = await axios.get(`${BOOK_POSTS_API_BASE}/${workID}/posts`);
    return response.data;
}

export const getPostsByUserID = async (userID) => {
    const response = await axios.get(`${POST_API_BASE}/${userID}/posts`);
    return response.data;
}

export const deletePost = async (postID) => {
    const response = await axios.delete(`${POST_API_BASE}/${postID}`);
    return response.data;
}

export const getPosts = async () => {
    const response = await axios.get(`${POST_API_BASE}`);
    return response.data;
}

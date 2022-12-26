import axios from "axios";

const POSTS_API_BASE = "http://localhost:4000/api/posts";
const credentialAPI = axios.create({withCredentials: true});



export const createPost = async (post) => {
  const response = await credentialAPI.post(`${POSTS_API_BASE}`, post);
  return response.data;
}

export const getPostsByAuthorAndWorkID = async (author,workID) => {
  const response = await axios.get(`${POSTS_API_BASE}/${workID}/${author}`);
  return response.data;
}

export const getPostsByAuthor = async (author) => {
  const response = await axios.get(`${POSTS_API_BASE}/${author}`);
  return response.data;
}

export const deletePost = async (uid) => {
  const response = await axios.delete(`${POSTS_API_BASE}/${uid}`);
  return response.data;
}

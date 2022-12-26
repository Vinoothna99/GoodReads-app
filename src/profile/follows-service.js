import axios from "axios";

const FOLLOWS_API_BASE = "http://localhost:4000/api/follows";
const credentialAPI = axios.create({withCredentials: true});

export const followUser = async (follow) => {
    const response = await credentialAPI.post(`${FOLLOWS_API_BASE}`, follow);
    return response.data;
}

export const getFollowersByUserID = async (followedID) => {
    const response = await credentialAPI.get(`${FOLLOWS_API_BASE}/${followedID}/followers`);
    return response.data;
}

export const getFollowingByUserID = async (followerID) => {
    const response = await credentialAPI.get(`${FOLLOWS_API_BASE}/${followerID}/following`);
    return response.data;
}
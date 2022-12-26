import axios from "axios";

const REVIEW_API_BASE = "http://localhost:4000/api/reviews";
const BOOK_REVIEWS_API_BASE = "http://localhost:4000/api/books";
const credentialAPI = axios.create({withCredentials: true});

export const postReview = async (review) => {
    const response = await credentialAPI.post(`${REVIEW_API_BASE}`, review);
    return response.data;
}

export const getReviewsByWorkID = async (workID) => {
    const response = await axios.get(`${BOOK_REVIEWS_API_BASE}/${workID}/reviews`);
    return response.data;
}

export const getReviewsByUserID = async (userID) => {
    const response = await axios.get(`${REVIEW_API_BASE}/${userID}/reviews`);
    return response.data;
}

export const deleteReview = async (reviewID) => {
    const response = await axios.delete(`${REVIEW_API_BASE}/${reviewID}`);
    return response.data;
}

export const getReviews = async () => {
    const response = await axios.get(`${REVIEW_API_BASE}`);
    return response.data;
}
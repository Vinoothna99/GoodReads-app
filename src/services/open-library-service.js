import axios from "axios";

const SEARCH_URL = "https://openlibrary.org/search.json?q=";
const DETAILS_URL = "https://openlibrary.org/works/"

export const findBooksBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`);
    return response.data;
}

export const findBookByWorkID = async (workID) => {
    const response = await axios.get(`${DETAILS_URL}${workID}.json`);
    return response.data;
}
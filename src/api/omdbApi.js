/* eslint-disable */
import {OMDB_URL, OMDB_URL_MOVIE} from "./omdbConfig";

const createItems = (data) => {
    const itemsQuantity = 20
    const sortedData = data.items.sort(() => .5 - Math.random()).slice(0, itemsQuantity);
    return sortedData
}


export const getMovies = async (options) => {
    const response = await fetch(OMDB_URL);
    const data = await response.json();
    return createItems(data);
}
export const getMovieFromID = async (ID) => {
    const response = await fetch(OMDB_URL_MOVIE + ID);
    const data = await response.json();
    return data;
}

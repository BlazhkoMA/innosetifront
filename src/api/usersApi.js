/* eslint-disable */
import {USERS_URL} from "./usersConfig";



export const getUsers = async (options) => {
    const response = await fetch(USERS_URL);
    const data = await response.json();
    return data;
}
export const getUser = async (ID) => {
    const response = await fetch(USERS_URL + '/' +  ID);
    const data = await response.json();
    return data;
}

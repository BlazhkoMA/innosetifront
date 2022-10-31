/* eslint-disable */
import {USERS_URL} from "./usersConfig";

export const getUsers = async (options) => {
    const response = await fetch(USERS_URL);
    return await response.json();
}
export const getUser = async (ID) => {
    const response = await fetch(USERS_URL + '/' +  ID);
    return await response.json();
}

import { API_CONFIG } from "./config"



// this fetches all the dogs
export const getAllDogs = () => {
    return fetch(API_CONFIG.baseUrl + "/dogs").then((res)=>res.json());
}
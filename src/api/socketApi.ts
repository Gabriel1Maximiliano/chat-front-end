import axios from 'axios';

export const baseURL = import.meta.env.VITE_REACT_APP_URL_API;


const socketApi = axios.create({
    baseURL
})

export default socketApi;
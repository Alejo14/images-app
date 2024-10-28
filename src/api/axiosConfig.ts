import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const accessKey = import.meta.env.VITE_ACCESS_KEY;
const apiVersion = import.meta.env.VITE_API_VERSION;

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',        
        "Authorization": `Client-ID ${accessKey}`,
        "Accept-Version": apiVersion,
    },
});

export default api;
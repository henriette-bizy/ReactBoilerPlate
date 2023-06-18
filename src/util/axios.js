import axios from "axios";
import { BASE_URL } from "../api/user";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json'
    }
})
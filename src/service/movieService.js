import axios from 'axios';
import {apiBaseUrl} from "../constants/api";
const axiosMovies = axios.create(
    {
        baseURL: apiBaseUrl,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Y4YmJiZWQxZTliMDY2NzdlZjZkNTdkNjVhYzJlOCIsInN1YiI6IjYxMmY2MTlkZmFjNTAyMDAyNmZkY2EyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrL-NnkEwRCaGFDHqrPJARIvFRXR_Rq3uSxg6wnrQY0'
        }

    })
export {axiosMovies};

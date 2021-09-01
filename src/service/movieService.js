import axios from 'axios';
const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3/',
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Y4YmJiZWQxZTliMDY2NzdlZjZkNTdkNjVhYzJlOCIsInN1YiI6IjYxMmY2MTlkZmFjNTAyMDAyNmZkY2EyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrL-NnkEwRCaGFDHqrPJARIvFRXR_Rq3uSxg6wnrQY0'}
});
const discoverMovie = async() => await instance.get('discover/movie');
export {discoverMovie};

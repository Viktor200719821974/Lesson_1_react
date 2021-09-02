import axios from 'axios';

const axiosMovies = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Y4YmJiZWQxZTliMDY2NzdlZjZkNTdkNjVhYzJlOCIsInN1YiI6IjYxMmY2MTlkZmFjNTAyMDAyNmZkY2EyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrL-NnkEwRCaGFDHqrPJARIvFRXR_Rq3uSxg6wnrQY0'
        }

    });

const getMovies = async () => await axiosMovies.get('discover/movie');
const url = 'https://image.tmdb.org/t/p/w500/';
function getImages (poster_path){
    return fetch(url + poster_path)
        .then(value => value.json())
}

export { getMovies, getImages};
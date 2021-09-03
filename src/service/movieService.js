import axios from 'axios';

const axiosMovies = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Y4YmJiZWQxZTliMDY2NzdlZjZkNTdkNjVhYzJlOCIsInN1YiI6IjYxMmY2MTlkZmFjNTAyMDAyNmZkY2EyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrL-NnkEwRCaGFDHqrPJARIvFRXR_Rq3uSxg6wnrQY0'
        }

    });

const getMovies = async () => await axiosMovies.get('/discover/movie');
const getGenres = async ()=> await axiosMovies.get('/genre/movie/list');
const getMovie = async (id) => await axiosMovies('/movie/'+ id);
export { getMovies, getGenres, getMovie};

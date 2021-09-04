import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {apiMoviesUrl} from "../../constants/api";
import {getMoviesImage} from "../../service/functionData";
import MoviesList from "../../components/MoviePage";
const MoviesPage = () =>{
    const [movies, setMovies] = useState(null);
    const getMovies = async (url) =>{
        const res = await axiosMovies(url);
        console.log(res);
        const moviesList = res.data.results.map(({id,title,backdrop_path})=>{
           const imageUrl = getMoviesImage(backdrop_path);
            return {
                id,
             title,
             backdrop_path,
                imageUrl
         }
        })
        setMovies(moviesList);
    }
    useEffect(()=>{
        getMovies(apiMoviesUrl);

    },[]);
    return (
        <div>
            {movies && <MoviesList movies={movies}/>}

        </div>
    )
}
export default MoviesPage;

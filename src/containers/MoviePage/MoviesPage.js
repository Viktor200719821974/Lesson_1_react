import {useEffect, useState} from "react";
import MoviesList from "../../components/MoviePage";
import MovieNavigation from "./MovieNavigation/movieNavigation";
import {getMoviePageId, getMoviesImage, newNextPageUrl, newPrevPageUrl} from "../../service/functionData";
import {apiMoviesUrl} from "../../constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";
import {axiosMovies} from "../../service/movieService";

const MoviesPage = () =>{
    const [movies, setMovies] = useState(null);
    // const [prevPage, setprevPage] = useState(null);
    // const [nextPage, setnextPage] = useState(null);
    // const [counterPage, setcounterPage] = useState(1);
    const query = useQueryParams();
    const queryPage = query.get('page');
    const getMovies = async (url) =>{
        const res = await axiosMovies(url);

        // const numberPage = res.data.page;
        console.log(res);
        // const prevPageNew = numberPage -1;
        // const nextPageNew = numberPage + 1;
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
        // setprevPage(newPrevPageUrl(prevPageNew));
        // setnextPage(newNextPageUrl(nextPageNew));
        // setcounterPage(getMoviePageId(apiMoviesUrl+queryPage));
    }
    useEffect(()=>{
        getMovies(apiMoviesUrl+queryPage);
    },[queryPage]);
    return (
        <div>
            {/*<MovieNavigation getMovies={getMovies} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage}/>*/}
            {movies && <MoviesList movies={movies}/>}

        </div>
    )
}
export default MoviesPage;

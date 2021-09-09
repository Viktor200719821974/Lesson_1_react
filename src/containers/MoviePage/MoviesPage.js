import {useEffect, useState} from "react";
import MoviesList from "../../components/MoviePage";
import MovieNavigation from "./MovieNavigation/MovieNavigation";
import {getMoviePageId, getMoviesImage, newNextPageUrl, newPrevPageUrl} from "../../service/functionData";
import {apiMoviesUrl} from "../../constants/api";
import {useQueryParams} from "../../hooks/useQueryParams";
import {axiosMovies} from "../../service/movieService";

const MoviesPage = () =>{
    const [movies, setMovies] = useState(null);
    // const [moviesPages, setMoviesPages] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [loading, setLoading] = useState(false);
    // const [pageCount, setPageCount] = useState(null);
    // console.log(currentPage);
    // useEffect(()=> {
    //     (async () => {
    //         // setLoading(true);
    //         const res = await axiosMovies(apiMoviesUrl + currentPage);
            // setMoviesPages(res.data);
            // setCurrentPage(res.data.page);
            // setPageCount(res.data.total_pages);
            // setLoading(false);
    //     })();
    // },[currentPage]);
    const query = useQueryParams();
    const queryPage = query.get('page');
    const getMovies = async (url) =>{

        const res = await axiosMovies(url);
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
        getMovies(apiMoviesUrl+queryPage);
    },[queryPage]);

    return (
        <div>
            {/*{moviesPages &&<MovieNavigation setCurrentPage={setCurrentPage} loading={loading} pageCount={pageCount}*/}
            {/*                                currentPage={currentPage} key={moviesPages.id}/>}*/}
            {movies && <MoviesList movies={movies} key={movies.id}/>}
        </div>
    )
}

export default MoviesPage;

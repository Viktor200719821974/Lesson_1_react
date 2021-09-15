import {useEffect, useState} from "react";
import MoviesList from "../../components/MoviePage";
import {apiMoviesUrl} from "../../constants/api";
import {axiosMovies} from "../../service/movieService";
import CustomPagination from "../../components/Pagination/CustomPagination";
import {GenreBadge} from "../../components/GenreBadge/GenreBadge";
import useGenres from "../../hooks/useGenres";

const MoviesPage = () =>{
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [numOfPages, setNumOfPages] = useState();
    const [movies, setMovies] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres]= useState([]);
    const genreForUrl = useGenres(selectedGenres);
    useEffect(()=> {
        (async () => {
            setLoading(true);
            const res = await axiosMovies(apiMoviesUrl + `&page=${page}&with_genres=${genreForUrl}`);

            setMovies(res.data.results);
            setNumOfPages(res.data.total_pages);
            setLoading(false);
        })();
    },[page,genreForUrl]);
    return (
        <div>
            <GenreBadge
                type="movie"
                selectedGenres={selectedGenres}
                genres={genres}
                setGenres={setGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            />
        <div className={'main_container'}>
            {movies && movies.map((c)=> (
                <MoviesList
                key={c.id}
                id={c.id}
                poster={c.poster_path || c.backdrop_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type= "movie"
                vote_average={c.vote_average}
                backdrop_path={c.backdrop_path || c.poster_path}
                />
            ))}
            { numOfPages >1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages} loading={loading}/>)}
        </div>
        </div>
    )
}

export default MoviesPage;

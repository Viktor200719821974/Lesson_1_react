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
    const [numberOfPages, setNumberOfPages] = useState();
    const [content, setContent] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres]= useState([]);
    const genreForUrl = useGenres(selectedGenres);
    useEffect(()=> {
        (async () => {
            setLoading(true);
            const res = await axiosMovies(apiMoviesUrl + page + genreForUrl);

            setContent(res.data.results);
            setNumberOfPages(res.data.total_pages);
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
            {content && content.map((c)=> (
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
            { numberOfPages >1 && (<CustomPagination setPage={setPage} numberOfPages={numberOfPages} loading={loading}/>)}
        </div>
        </div>
    )
}

export default MoviesPage;

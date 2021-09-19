import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import Genres from "../Genres/Genres";
import {useEffect, useState} from "react";
import useGenres from "../../hooks/useGenres";
import axios from "axios";
import {MAIN_API_TV, REACT_APP_API_KEY, URL_API_MOVIES} from "../../constans/constans";

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genresUrl = useGenres(selectedGenres);

    const fetchMovies =async() =>{
        const {data} = await axios(`${MAIN_API_TV}${REACT_APP_API_KEY}${URL_API_MOVIES}${page}&with_genres=${genresUrl}`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
    useEffect(()=> {
        fetchMovies();
        // eslint-disable-next-line
    },[page, genresUrl]);
    return (
        <>
            <span className={'pageTitle'}>TV Series</span>
            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className={'trending'}>
                {content && content.map((c)=><SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="tv"
                    vote_average={c.vote_average}
                />)}
                {numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
            </div>
        </>
    )
}
export default Series;
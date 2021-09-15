import './MovieListCard.css';
import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {apiMovieUrlId} from "../../constants/api";
import MovieInfo from "./MovieInfo";
import {getMovieInfoImage} from "../../service/functionData";
import PosterPreview from "./PosterPreview";
import {useSelector} from "react-redux";

const MovieListCard = ({match}) => {
const [movieInfo, setMovieInfo] = useState(null);
const [movieInfoName, setMovieInfoName] = useState(null);
const [movieInfoImage,setMovieInfoImage] = useState(null);
const [movieId, setMovieId] = useState(null);
    const [movieFavorite, setMovieFavorite] = useState(false);
const [rating, setRating] = useState();
    const storeData = useSelector(state => state.userInfo);

    const imageInfo = getMovieInfoImage(movieInfoImage);
    useEffect(()=>{
        (async () =>{
            const id = match.params.id;
            const res = await axiosMovies(`${apiMovieUrlId}/${id}`);
            storeData[id] ? setMovieFavorite(true) : setMovieFavorite(false);
            setMovieId(id);
            setRating(res.data.vote_average);
            setMovieInfo([
                {title: 'Budget', data: res.data.budget},
                {title: 'Release Date', data: res.data.release_date},
                {title: 'Tagline', data: res.data.tagline},
                {title: 'Original Language', data: res.data.original_language},
                {title: 'Overview', data: res.data.overview},
                {title: 'Revenue', data: res.data.revenue},
                {title: 'Runtime', data: res.data.runtime},
                {title: 'Tagline', data: res.data.tagline},
                // {title: 'Vote Average', data: res.data.vote_average},
                {title: 'Vote Count', data: res.data.vote_count}
            ]);
            setMovieInfoName(res.data.title);
            setMovieInfoImage(res.data.poster_path);
        })();
    },[]);
    return (
        <div>
            <h2 className={'containerName'}>{movieInfoName}</h2>
        <div className={'infoConteiner'}>
            {movieInfo &&<PosterPreview imageInfo={imageInfo} movieId={movieId} movieInfoName={movieInfoName} key={movieInfo.id}
                                        setMovieFavorite={setMovieFavorite} movieFavorite={movieFavorite}/>}
            {movieInfo && (<MovieInfo movieInfo={movieInfo} key={movieInfo.id} rating={rating}/> )}
        </div>
        </div>
    )
}
export default MovieListCard;

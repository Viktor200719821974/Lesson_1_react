import {useEffect, useState} from "react";
import {getMovies, getGenres, getMovie} from "../service/movieService";
import {MoviesList} from "./MoviesList";
import {GenreBadge} from "./GenreBadge";
import {MoviesListCard} from "./MoviesListCard";

export function Header(){
    let [movies, setMovies] = useState([]);
    let [genres, setGenres] = useState([]);
    useEffect(() => {
        getMovies().then(value => setMovies([...value.data.results]));
    },[]);
useEffect(() => {
    getGenres().then(value =>
        setGenres([...value.data.genres]));
});
// const returnItemProps = (item) =>{
//     setMovie([...item]);
// }
    return (

        <div>
            {movies.map(value => <MoviesList item={value} key={value.id} />)}
            {genres.map(value => <GenreBadge item={value} key={value.id}/>)}
        </div>


    )
}

import {useEffect, useState} from "react";
import {getImages, getMovies} from "../service/movieService";
import {MoviesList} from "./MoviesList";


export function Header(){
    let [movies, setMovies] = useState([]);
    console.log(movies);
    useEffect(() => {
        getMovies().then(value => setMovies([...value.data.results]));
    },[]);

    return (
        <div>
            {movies.map(value => <MoviesList item={value} key={value.id}/>)}
        </div>
    )
}

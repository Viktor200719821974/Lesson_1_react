import "./GenreBadge.css";
import {useEffect, useState} from "react";
import {urlGeners} from "../../constants/api";
import {axiosMovies} from "../../service/movieService";
import GenresMovie from "./GenresMovie";

export function GenreBadge(){

    const [genres, setGenres] = useState(null);
    const [idGenres, setIdGenres] = useState(null);
    console.log(idGenres);
    useEffect(()=>{
        (async () =>{
            const res = await axiosMovies(urlGeners);
            setGenres(res.data.genres);
            setIdGenres(res.data.genres.id);
        })();
    },[]);
    return (
        <div>
            {
                genres && (<GenresMovie genres={genres} idGenres={idGenres} key={genres.id}/>)
            }
        </div>
    )
}

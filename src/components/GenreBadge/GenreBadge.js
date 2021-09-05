import "./GenreBadge.css";
import {useEffect, useState} from "react";
import {urlGeners} from "../../constants/api";
import {axiosMovies} from "../../service/movieService";
import {Link} from "react-router-dom";
import GenresMovie from "./GenresMovie";

export function GenreBadge(){

    const [genres, setGenres] = useState(null);
    useEffect(()=>{
        (async () =>{
            const res = await axiosMovies(urlGeners);
            setGenres(res.data.genres);
        })();
    },[]);
    return (
        <div>
            {
                genres && (<GenresMovie genres={genres} key={genres.id}/>)
            }
        </div>
    )
}

import {useEffect, useState} from "react";
import {getMovie} from "../service/movieService";
// import {MoviesListCard} from "./MoviesListCard";

export function MoviesList({item}){
    let url = 'https://image.tmdb.org/t/p/w200/';
    const changeSrcImages = url + item.poster_path;
    return (

        <div>
            <img src={changeSrcImages} alt={item.title}/>
        </div>

    )
}

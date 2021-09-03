import {useEffect, useState} from "react";
import {getMovie} from "../service/movieService";
import {MoviesListCard} from "./MoviesListCard";
import {
    BrowserRouter as Router,
    Route,
    Link, Switch,
} from "react-router-dom";

export function MoviesList({item}){
    let url = 'https://image.tmdb.org/t/p/w200/';
    const changeSrcImages = url + item.poster_path;
    return (
<Router>
        <div>
            <h2><Link to={'/MoviesListCard'}>{item.title}</Link></h2>
            <img src={changeSrcImages} alt={item.title}/>
        </div>
    <Route exact path={'/MoviesListCard'} component={MoviesListCard}/>
</Router>
    )
}

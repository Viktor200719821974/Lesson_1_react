import "./GenreBadge.css";
import {useEffect, useState} from "react";
import {apiBaseUrl, urlGeners} from "../../constants/api";
import {axiosMovies} from "../../service/movieService";
import {Chip} from "@material-ui/core";

export function GenreBadge({type, selectedGenres, genres, setGenres, setSelectedGenres, setPage}){

    const handleAdd = (genre) =>{
      setSelectedGenres([...selectedGenres, genre]);
      setGenres (genres.filter((g) => g.id !== genre.id));
      setPage(1);

    }
    const handleRemove = (genre) =>{
        setSelectedGenres(
       selectedGenres.filter((selected) => selected.id !== genre.id)
    );
        setGenres([...genres, genre]);
        setPage(1);
    };
const getGenres = async () => {
    const {data} = await axiosMovies(apiBaseUrl+ `/genre/${type}/list`);
    setGenres(data.genres);
};
    useEffect(() => {
        getGenres();
        return () => {
            setGenres({});
        };
//eslint-dsable-next-line
    }, []);
    return (
        <div style={{padding: "6px 0"}}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{margin: 2}}
                    size= "small"
                    color= "primary"
                    key={genre.id}
                    clickable
                    onDelete={()=> handleRemove(genre)}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{margin: 2}}
                    size="small"
                    key={genre.id}
                    clickable
                    onClick={()=> handleAdd(genre)}
                />
            ))}
        </div>
    )
}

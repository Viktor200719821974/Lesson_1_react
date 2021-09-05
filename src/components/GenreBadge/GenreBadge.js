import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {urlGeners} from "../../constants/api";

export function GenreBadge(){
//     const getGenres = async (url) =>{
//         const res = await axiosMovies(url);
//         console.log(genres);
//         const genresList = res.data.results.map(({id,name})=>{
//             return {
//                 id,
//                 name,
//             }
//         })
// }
//     useEffect(()=>{
//         (async () =>{
//             const res = await axiosMovies(urlGeners);
//             console.log(urlGeners, res);
//         })();
//     },[]);
    return (
        <div>
            {/*{genres.name}*/}
        </div>
    )
}

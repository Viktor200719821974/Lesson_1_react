import {useEffect, useState} from "react";
import {getGenres} from "../../service/movieService";

export function GenreBadge(){
    let [genres, setGenres] = useState([]);
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
//         getGenres().then(value => setGenres([...value]));
//     },[]);
    return (
        <div>
            {/*{genres.name}*/}
        </div>
    )
}

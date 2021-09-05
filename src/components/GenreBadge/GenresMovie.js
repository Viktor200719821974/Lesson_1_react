import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {apiUrlMovies} from "../../constants/api";
import {Link} from "react-router-dom";

const GenresMovie = ({genres}) =>{
    // console.log(genres.id);
    const [movies, setMovies] = useState(null);
    const [genreId, setGenreId] = useState(null);
    console.log(genreId);
    useEffect(()=> {
        (async () => {
            // const id = match.params;
            // console.log(id);
            const res = await axiosMovies(apiUrlMovies);
           setMovies(res.data.results);
           setGenreId(res.data.results);
        })();
    },[]);
            return (
                <div>
                    <ul>
                        {
                           genres && genres.map(({id,name}) => (

                                <li  className={'genreBadge'} key={id}>
                                    <Link to={'/GenresMovie'} >
                                        {name}
                                    </Link>
                                </li>
                            ))
                           // (movies && movies.filter(() =>{
                           //     // if (id === 0)
                           //     //     return


                           // ))
                        }
                    </ul>




                </div>
            )
}
export default GenresMovie;

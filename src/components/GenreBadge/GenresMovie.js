import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {apiUrlMovies} from "../../constants/api";
import {Link} from "react-router-dom";



const GenresMovie = ({genres}) =>{
    const [movies, setMovies] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(()=> {
        (async () => {
            const res = await axiosMovies(apiUrlMovies);
           setMovies(res.data.results);

        })();
    },[]);
            return (
                <div>
                    <ul>
                        {
                           genres && genres.map(({id,name}) => (

                                <li  className={'genreBadge'} key={id}>
                                    <Link className={'link_genreBadge'} to={'/GenresMovie'} >
                                        {name}
                                    </Link>
                                </li>
                            ))

                        }
                    </ul>

                </div>
            )
}
export default GenresMovie;

import './MoviesList.css';
import MoviesImage from "./MoviesImage";
import {Link} from "react-router-dom";
const MoviesList = ({movies}) =>{
    return (
        <div>
            <ul className={"list_container"}>
                {movies.map(({id,title,imageUrl })=>
                    <li className={"list_item"} key={id}>
                        <Link to={`/movies/${id}`}>
                        <MoviesImage movies={movies} imageUrl={imageUrl} key={id}/>
                        <p>{title}</p>
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    )
}
export default MoviesList;

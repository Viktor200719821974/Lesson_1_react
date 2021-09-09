import './MoviesList.css';
import MoviesImage from "./MoviesImage";
import {Link} from "react-router-dom";
const MoviesList = ({movies, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>}
    return (
        <div>
            <ul className={"list_container"}>
                {movies.map(({id,title,imageUrl })=>
                    <li className={"list_item"} key={id}>
                        <Link   to={`/MoviesPage/${id}`}>
                        <MoviesImage movies={movies} imageUrl={imageUrl} key={id}/>
                        <p className={'link__item'}><b>{title}</b></p>
                        </Link>
                    </li>
                )}
            </ul>

        </div>
    )
}
export default MoviesList;

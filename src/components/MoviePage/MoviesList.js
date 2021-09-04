import './MoviesList.css';
import MoviesImage from "./MoviesImage";
const MoviesList = ({movies}) =>{
    return (
        <div>
            <ul className={"list_container"}>
                {movies.map(({id,title,imageUrl })=>
                    <li className={"list_item"} key={id}>
                        <a href="#">
                        <MoviesImage movies={movies} imageUrl={imageUrl} key={id}/>
                        <p>{title}</p>
                        </a>
                    </li>
                )}

            </ul>
        </div>
    )
}
export default MoviesList;

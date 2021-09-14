import './MoviesList.css';
import MoviesImage from "./MoviesImage";
import {Link} from "react-router-dom";
import {getMoviesImage} from "../../service/functionData";
const MoviesList = ({id,poster,title,date,media_type,vote_average,backdrop_path }) =>{
    const imageUrl = getMoviesImage(poster);

    return (
        <div >
            <ul>
                {/*{movies.map(({id,title,imageUrl,vote_average })=>*/}
                    <li className={"list_item"} key={id}>
                        <Link   to={`/MoviesPage/${id}`}>
                        <MoviesImage title={title} vote_average={vote_average} imageUrl={imageUrl} key={id}/>

                        <p className={'link__item'}><b>{title}</b></p>
                        </Link>
                    </li>
                {/*)}*/}
            </ul>

        </div>
    )
}
export default MoviesList;

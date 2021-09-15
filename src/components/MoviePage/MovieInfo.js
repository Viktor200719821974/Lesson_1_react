import './MovieListCard.css';
import StarsRating from "./StarsRating";

const MovieInfo = ({movieInfo, rating})=>{
    return (
        <div>

            <ul>
                {movieInfo.map(({title, data} , i) =>(
                     (
                        <li className={'movieInfo'} key={i}>
                            <span><strong>{title}:</strong> {data}</span>
                        </li>)
                ))}
            </ul>
            <StarsRating rating={rating}/>
        </div>
    )
}
export default MovieInfo;

import './MovieListCard.css';
import {useState} from "react";
import StarsRating from "./StarsRating";

const MovieInfo = ({movieInfo})=>{
    const [rating, setRating] = useState(0);

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
            <StarsRating rating={rating} onRating={(rate) => setRating(rate)} />
        </div>
    )
}
export default MovieInfo;

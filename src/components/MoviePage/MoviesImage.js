import {Badge} from "@material-ui/core";
import StarsRating from "./StarsRating";
import {useState} from "react";

const MoviesImage = ({title, vote_average, imageUrl}) =>{
    const [rating, setRating] = useState(0);
    return (
        <div>

            <img className={"movie_poster"} src={imageUrl} alt={title}/>
            <Badge badgeContent={vote_average} overlap="circular" color={vote_average > 6 ? "primary" : "secondary"}/>
            <StarsRating rating={rating} onRating={(rate) => setRating(rate)} count={10}/>
        </div>
    )
}

export default MoviesImage;

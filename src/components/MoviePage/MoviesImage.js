import {Badge} from "@material-ui/core";

const MoviesImage = ({title, vote_average, imageUrl}) =>{

    return (
        <div>
            <img className={"movie_poster"} src={imageUrl} alt={title}/>
            <Badge badgeContent={vote_average} overlap="circular" color={vote_average > 6 ? "primary" : "secondary"}/>
        </div>
    )
}

export default MoviesImage;

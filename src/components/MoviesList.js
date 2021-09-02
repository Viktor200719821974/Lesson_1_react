import {useEffect} from "react";
import {getImages} from "../service/movieService";

export function MoviesList({item}){
    // let poster_path = {item: item.poster_path};
    // useEffect(() => {
    //     getImages(poster_path).then(value => console.log(value))
    // })

    return (
        <div>
           <h3> {item.title}</h3>
            {item.poster_path}
            <img src="https://image.tmdb.org/t/p/w500/" alt={item.title}/>

        </div>
    )
}
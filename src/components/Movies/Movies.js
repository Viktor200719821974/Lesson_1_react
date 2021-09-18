import axios from "axios";
import {REACT_APP_API_KEY} from "../../constans/constans";
import {useEffect, useState} from "react";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../CustomPagination/CustomPagination";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchMovies =async() =>{
       const {data} = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=`);
       setContent(data.results);
       setNumOfPages(data.total_pages);
    }
    useEffect(()=> {
        fetchMovies();
    },[page]);
    return (
        <>
            <span className={'pageTitle'}>Movies</span>
            <div className={'trending'}>

                {content && content.map((c)=><SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="movie"
                    vote_average={c.vote_average}
                />)}
                {numOfPages > 1 && <CustomPagination setPage={setPage} numOfPages={numOfPages}/>}
            </div>
        </>
    )
}
export default Movies;
import axios from "axios";
import {REACT_APP_API_KEY} from "../../costants/constans";
import {useState} from "react";

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState();
    console.log(content);
    const fetchTrending = async () => {
        const {data} =await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    };
    return (
        <>
            <span className={'pageTitle'}>Trending</span>
        </>
    )
}

export default Trending;
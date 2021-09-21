import axios from "axios";
import {REACT_APP_API_KEY,MAIN_API_TRENDING} from "../../constans/constans";
import {useEffect, useState} from "react";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
// import prevButton from "../Pagination/image/prevButton.svg";
// import nextButton from "../Pagination/image/nextButton.svg";


const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

// const nextPageChange = (page)=>{
//     console.log(page);
//     const num = Number(page);
//     setPage(num+1);
//     window.scroll(0,0);
// }
    const fetchTrending = async () => {
        const {data} =await axios(`${MAIN_API_TRENDING}${REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    };
useEffect(()=>{
  fetchTrending();
},[page])
    return (
        <>
            <span className={'pageTitle'}>Актуальне сьогодні</span>
            <div className={'trending'}>

                    {content && content.map((c)=><SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                    />)}
                {/*<div  className={'box_image'}>*/}
                    {/*<img className={'button_pagination'} src={prevButton} alt="prevButton"/>*/}
                    <CustomPagination setPage={setPage} />
                    {/*<img className={'button_pagination'}*/}
                    {/*     onClick={(e)=> nextPageChange(page)}*/}

                    {/*     src={nextButton} alt="nextButton"/>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Trending;
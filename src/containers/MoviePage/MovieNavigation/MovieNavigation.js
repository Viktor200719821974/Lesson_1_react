import {useEffect, useState} from "react";
import {axiosMovies} from "../../../service/movieService";
import {apiMoviesUrl, apiUrlMovies} from "../../../constants/api";
import '../MoviesPage.css';
// const MovieNavigation = ({setCurrentPage, loading, pageCount, currentPage}) => {
//     //     const [moviesPages, setMoviesPages] = useState([]);
//     //     const [currentPage, setCurrentPage] = useState(3);
//     //     const [loading, setLoading] = useState(false);
//     //     const [pageCount, setPageCount] = useState(null);
//     // console.log(moviesPages);
//     // useEffect(()=> {
//     //     (async () => {
//     //         setLoading(true);
//     //         const res = await axiosMovies(apiMoviesUrl + currentPage);
//     // setMoviesPages(res.data);
//     // setCurrentPage(res.data.page);
//     // setPageCount(res.data.total_pages);
//     // setLoading(false);
//     //     })();
//     // },[currentPage]);
//     if(loading) {
//         return <h2>Loading...</h2>
//     }
//     let pages = [];
//     for (let i=1; i<= pageCount; i++){
//         pages.push(i);
//     }
//     return (
//         <div>
// <div className={'navigation'}>
//     {
//       pages.map( p => {
//           return <span className={currentPage === p && 'selectedPage'} key={p} onClick={()=>{setCurrentPage(p)}}>{p}</span>
//       })
//     }
// </div>
//         </div>
//     )
//
// }
// export default MovieNavigation;

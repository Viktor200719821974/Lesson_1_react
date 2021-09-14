// import '../MoviesPage.css';
// const Navigation = ({
//                         setCurrentPage,
//                         loading,
//                         pageCount,
//                         currentPage,
//                         maxPageNumberLimit,
//                         minPageNumberLimit,
//                         pageNumberLimit,
//                         setMaxPageNumberLimit,
//                         setMinPageNumberLimit
// }) => {
//     const handleNextBtn = ()=>{
//         setCurrentPage(currentPage+1);
//         if(currentPage+1 >maxPageNumberLimit){
//             setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit+ pageNumberLimit);
//         }
//     };
//     const handlePrevBtn = ()=>{
//         setCurrentPage(currentPage-1);
//         if((currentPage-1) % pageNumberLimit == 0){
//             setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//         }
//     };
//
//     if(loading) {
//         return <h2>Loading...</h2>
//     }
//     let pages = [];
//     for (let i=1; i<= pageCount; i++){
//         pages.push(i);
//     }
//
//     return (
//         <div className={'mainNavigation'}>
//             <div className={'navigation'}>
//                 <button className={'button_navigation'} onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true:false}>Prev</button>
//
//                 {
//                     pages.map( p => {
//                         if(p < maxPageNumberLimit+1 && p> minPageNumberLimit){
//                             return ( <p className={'pages'}><span className={currentPage === p && 'selectedPage'}
//                                                                   key={p} onClick={()=>{setCurrentPage(p)}}>{p}</span></p>
//                             );
//                         } else {
//                             return null;
//                         }
//                     })
//                 }
//                 <button className={'button_navigation'} onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true:false}>Next</button>
//             </div>
//
//
//         </div>
//     )
//
// }
// export default Navigation;
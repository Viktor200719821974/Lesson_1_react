// import React, {useMemo, useState} from "react";
// import Proptypes from "prop-types";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {star} from '@fortawesome/free-solid-svg-icons';
// const StarsRating = ({count, rating, color, onRating}) => {
//     // const [hoverRating, setHoverRating] = useState(0);
//     //
//     // const getColor = index => {
//     //  if(hoverRating >= index){
//     //      return color.filled;
//     //  }else if(!hoverRating && rating >= index){
//     //     return color.filled;
//     //  }
//     //  return color.unfilled;
//     // }
//     // const starRating = useMemo(()=>{
//     //     return Array(count)
//     //         .fill(0)
//     //         .map((_, i ) => i + 1)
//     //         .map(idx => (
//                 <FontAwesomeIcon
//                     // key={idx}
//                     className="cursor-pointer"
//                     icon="star"
//                     // onClick={()=> onRating({idx})}
//                     // style={{color: getColor(idx)}}
//                     // onMouseEnter={()=> setHoverRating(idx)}
//                     // onMouseLeave={()=>setHoverRating(0)}
//                     />
//             // ));
//     // },[count, rating, hoverRating])
//     return (
//         <div>
//             rating
//             {/*{starRating}*/}
//         </div>
//     )
// }
// StarsRating.propTypes = {
//    count: Proptypes.number,
//     rating: Proptypes.number,
//     onChange: Proptypes.func,
//     color: {
//        filled: Proptypes.string,
//         unfilled: Proptypes.string
//     }
// }
// StarsRating.defaultProps = {
//     count: 5,
//     rating: 0,
//     color: {
//         filled: "#F5eb3b",
//         unfilled: "#DCDCDC"
//     }
// }
//
// export default StarsRating;
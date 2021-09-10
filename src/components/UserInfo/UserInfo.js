import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import MoviesList from "../MoviePage";

const UserInfo = ()=>{
    const storeData = useSelector(state => state.userInfo);
    console.log(storeData);
    const [movies, setMovies] = useState([]);
useEffect(()=>{
const arr= Object.entries(storeData);
if (arr.length){
    const res = arr.map(item =>{
        return {
            id: item[0],
           ...item[1]
        }
    })
    console.log(res);
    setMovies(res);
}
},[])
    return (
        <div>
            <h1>Favorite Page</h1>
<MoviesList movies={movies}/>

        </div>
    )
}
export default UserInfo;
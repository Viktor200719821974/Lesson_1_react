import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const UserInfo = ()=>{
    const storeData = useSelector(state => state.userInfo);
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

    setMovies(res);
}
},[])
    return (
        <div>
            <h1 className="header_text">User Info</h1>
            <ul className={"list_container"}>
            {movies.map(({id,name,img}) => {
                return(
                    <li className={"list_item"} key={id}>
                        <Link   to={`/MoviesPage/${id}`}>
                    <img className={"movie_poster"} src={img} alt={name}/>
                        <p className={'link__item'}><b>{name}</b></p>
                        </Link>
                    </li>)
                })
            }
</ul>
        </div>
    )
}

export default UserInfo;
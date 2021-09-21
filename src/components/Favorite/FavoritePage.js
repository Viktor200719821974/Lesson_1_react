import FavoriteIcon from './img/favorite.svg';
import {Link} from "react-router-dom";
import './Favorite.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
const FavoritePage = () =>{
    const [count, setCount] = useState();

    const storeData = useSelector(state => state.favorite);
    console.log(count);
    useEffect(() =>{
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
        setCount(length);
    });
    return (
        <div className={'container_favorite'}>
            {/*<Link to={'/favorite'} >*/}
                <span className={'counter'}>{count}</span>
                <img className={'icon'} src={FavoriteIcon} alt="Favorite"/>
            {/*</Link>*/}

        </div>
    )
}
export default FavoritePage;
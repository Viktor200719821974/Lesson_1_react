import icon from './img/bookmark.svg';
import {Link} from "react-router-dom";
import './UserInfo.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
const UserInfoPage = () =>{
    const [count, setCount] = useState();

    const storeData = useSelector(state => state.userInfo);
    useEffect(() =>{
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
        setCount(length);
    });
    return (
        <div className={'container_userInfo'}>
         <Link to={'/UserInfo'} >
             <span className={'counter'}>{count}</span>
             <img className={'icon'} src={icon} alt="Favorite movies"/>
         </Link>

        </div>
    )
}
export default UserInfoPage;
import {NavLink} from "react-router-dom";
import './Header.css';
const Header =() =>{

    return (

        <div className={'container'}>
            <ul className={'list_container_header'}>
                <li> <NavLink to={'/'} exact>Home</NavLink></li>
                <li><NavLink to={'/MoviesPage/?page=1'} exact>MoviesPage</NavLink></li>
                <li><NavLink to={'/GenreBadge'} exact>Genres</NavLink></li>
                <li><NavLink to={'/Userinfo'} exact>UserInfo</NavLink></li>
            </ul>
        </div>


    )
}
export default Header;

import {NavLink} from "react-router-dom";
import './Header.css';
const Header =() =>{

    return (

        <div className={'container'}>
            <ul className={'list_container_header'}>
                <li> <NavLink to={'/'} exact>Home</NavLink></li>
                <li><NavLink to={'/MoviesPage'} exact>MoviesPage</NavLink></li>
            </ul>


        </div>


    )
}
export default Header;

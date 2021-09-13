import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import './Header.css';
import UserInfoPage from "../UserInfo/UserInfoPage";
import imgLight from './image/light.svg';
import imgDark from './image/dark.svg';
import imgNeitral from './image/neitral.svg';
import {useTheme} from "../../context/ThemeProvider";
import {THEME_DARK, THEME_LIGHT, THEME_NEITRAL} from "../../constants/api";

const Header =() =>{
    const [icon, setIcon] = useState(imgNeitral);
const isTheme = useTheme();
useEffect(()=>{
    switch(isTheme.theme){
        case THEME_LIGHT: setIcon(imgLight);
            break;
        case THEME_DARK: setIcon(imgDark);
            break;
        case THEME_NEITRAL: setIcon(imgNeitral);
            break;
            default: setIcon(imgNeitral);
    }
},[isTheme]);
    return (

        <div className={'container'}>
            <img className={'logo'} src={icon} alt="Icon"/>
            <ul className={'list_container_header'}>
                <li> <NavLink to={'/'} exact>Home</NavLink></li>
                <li><NavLink to={'/MoviesPage/?page=1'} exact>MoviesPage</NavLink></li>
                <li><NavLink to={'/GenreBadge'} exact>Genres</NavLink></li>
            </ul>
            <UserInfoPage/>
        </div>


    )
}
export default Header;

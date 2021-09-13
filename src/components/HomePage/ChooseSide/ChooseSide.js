import {useTheme} from "../../../context/ThemeProvider";
import PropTypes from 'prop-types';
import "./ChooseSide.css";
import cn from 'classnames';
import {THEME_DARK, THEME_LIGHT, THEME_NEITRAL} from "../../../constants/api";
import imgLight from './img/light_theme.jpg';
import imgDark from './img/dark_theme.jpg';
import imgNeitral from './img/neitral_theme.jpg';

const ChooseSideItem = ({
    classes,
    theme,
    text,
    img
})=> {
    const isTheme = useTheme();
    return (

    <div className={cn('item_theme', classes)} onClick={()=> isTheme.change(theme)}>
        <div className={'item__header'}>{text}</div>
        <img  className={'item_img'} src={img} alt={text}/>
        </div>
    )
}
   ChooseSideItem.propTypes = {
    theme: PropTypes.string,
       text: PropTypes.string,
       img: PropTypes.string,
       classes: PropTypes.string,
   }

const ChooseSide = () =>{
const elements = [
    {
        classes: 'item_light',
        theme: THEME_LIGHT,
        text: "Lighte Side",
        img: imgLight
    },
    {
        classes: 'item_dark',
        theme: THEME_DARK,
        text: "Dark Side",
        img: imgDark
    },
    {
        classes: 'item_neitral',
        theme: THEME_NEITRAL,
        text: "Neitral Side",
        img: imgNeitral
    }
]
    return (
        <div className={'container_theme'}>
            { elements.map(({theme,text,img,classes}, index) =>(
           <ChooseSideItem theme={theme} text={text} img={img} classes={classes} key={index}/>
            ))}
        </div>
    )
}
export default ChooseSide;
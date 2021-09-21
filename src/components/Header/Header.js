import './Header.css';
import clapperboard from './image/clapperboard.svg';
import videoCamera from './image/video-camera.svg';
import FavoritePage from "../Favorite/FavoritePage";
const Header = () => {
    return (
<>
            <span className={'header'} onClick={() => window.scroll(0, 0)}>
               <img className={'img_header'} src={clapperboard} alt="clapperboard"/>
                центр розваг
                <img className={'img_header'} src={videoCamera} alt="videoCamera"/>
            <FavoritePage/>
           </span>

</>
    );
}

export default Header;
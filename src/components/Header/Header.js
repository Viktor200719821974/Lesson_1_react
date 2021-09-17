import './Header.css';
import clapperboard from './image/clapperboard.svg';
import videoCamera from './image/video-camera.svg';
const Header = () => {
    return (

            <span className={'header'}>
               <img className={'img_header'} src={clapperboard} alt="clapperboard"/>
                Entertaiment Hub
                <img className={'img_header'} src={videoCamera} alt="videoCamera"/>
            </span>

    );
}

export default Header;
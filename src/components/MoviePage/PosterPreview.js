import './MovieListCard.css';
import {useHistory} from "react-router";
import iconBack from './img/arrow.svg';
const PosterPreview = ({imageInfo}) => {
    const history = useHistory();

    const handleGoBack = e =>{
        e.preventDefault();
        history.goBack();
    }
    return (
        <div className={'imageInfo'}>
            <a href="#" onClick={handleGoBack} className={'link'}>
                <img className={'link__img'} src={iconBack} alt=""/>
                <b>Go back</b>
            </a>
            <img src={imageInfo} alt=""/>
        </div>
    )
}
export default PosterPreview;

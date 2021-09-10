import './MovieListCard.css';
import PropTypes from 'prop-types';
import {useHistory} from "react-router";
import iconBack from './img/arrow.svg';
import {useDispatch} from "react-redux";
import {removeMovieFromFavorite, setMovieToFavorite} from "../../store/actions";

const PosterPreview = ({imageInfo,movieId,movieInfoName}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleGoBack = e =>{
        e.preventDefault();
        history.goBack();
    }
    const add = ()=>{
        dispatch(setMovieToFavorite({
            [movieId]:{
                name: movieInfoName,
                img: imageInfo
            }}));
    }
    const del = ()=>{
        dispatch(removeMovieFromFavorite(movieId));
    }
    return (
        <div className={'imageInfo'}>
            <a href="#" onClick={handleGoBack} className={'link'}>
                <img className={'link__img'} src={iconBack} alt=""/>
                <b>Go back</b>
            </a>
            <img src={imageInfo} alt=""/>
            <button onClick={add}>ADD</button>
            <button onClick={del}>DELETE</button>
        </div>
    )
}
PosterPreview.propTypes = {
   imageInfo: PropTypes.string,
    movieInfoName: PropTypes.string,
    movieId: PropTypes.string
}

export default PosterPreview;

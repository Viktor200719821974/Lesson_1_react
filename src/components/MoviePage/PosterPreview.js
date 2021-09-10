import './MovieListCard.css';
import PropTypes from 'prop-types';
import {useHistory} from "react-router";
import iconBack from './img/arrow.svg';
import {useDispatch} from "react-redux";
import {removeMovieFromFavorite, setMovieToFavorite} from "../../store/actions";
import iconFavorite from './img/like.svg';
import iconFavoriteFill from './img/like_fill.svg';

const PosterPreview = ({imageInfo,movieId,movieInfoName,movieFavorite,setMovieFavorite}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleGoBack = e =>{
        e.preventDefault();
        history.goBack();
    }
const dispatchMovieFavorite = () =>{
        if (movieFavorite) {
            dispatch(removeMovieFromFavorite(movieId));
            setMovieFavorite(false);
        }else {
            dispatch(setMovieToFavorite({
                [movieId]:{
                    name: movieInfoName,
                    img: imageInfo
                }}));
            setMovieFavorite(true);
        }
}
    return (
        <div>
            <a href="#" onClick={handleGoBack} className={'link'}>
                <img className={'link__img'} src={iconBack} alt=""/>
                <b>Go back</b>
            </a>
            <div className={'imageInfo'}>
           <div className={'image_container'}>
            <img src={imageInfo} alt=""/>
               <img
               src= { movieFavorite ? iconFavoriteFill : iconFavorite}
               onClick={dispatchMovieFavorite}
               className={'image_favorite'}
               alt="Add to favorite"
           />
           </div>
        </div>
        </div>
    )
}
PosterPreview.propTypes = {
   imageInfo: PropTypes.string,
    movieInfoName: PropTypes.string,
    movieId: PropTypes.string,
    movieFavorite: PropTypes.bool,
    setMovieFavorite: PropTypes.func
}

export default PosterPreview;

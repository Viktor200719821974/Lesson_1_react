import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const MovieNavigation = ({getMovies, prevPage, nextPage, counterPage}) => {
    return (
        <div>
            <Link to={`/movie/?page=${counterPage - 1}`}>
                <button>Previos</button>
            </Link>
            <Link to={`/movie/?page=${counterPage + 1}`}>
                <button>Next</button>
            </Link>
            <h1 className="header_text">Navigation</h1>
        </div>
    )
}
MovieNavigation.propTypes = {
    getMovie:PropTypes.func,
    prevPage:PropTypes.string,
    nextPage:PropTypes.string,
    counterPage: PropTypes.number,
}
export default MovieNavigation;

const MoviesImage = ({movies, imageUrl}) =>{
    return (
        <div>
            <img className={"movie_poster"} src={imageUrl} alt={movies.title}/>
        </div>
    )
}
export default MoviesImage;

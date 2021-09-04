import './MoviesList.css';
const MoviesList = ({movies}) =>{
    return (
        <div>
            <ul className={"list_container"}>
                {movies.map(({id,title,imageUrl })=>
                    <li className={"list_item"} key={id}>
                        <a href="#">
                        <img className={"movie_poster"} src={imageUrl} alt={title}/>
                        <p>{title}</p>
                        </a>
                    </li>
                )}

            </ul>
        </div>
    )
}
export default MoviesList;

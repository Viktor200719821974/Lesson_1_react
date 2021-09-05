import './MovieListCard.css';
const MovieInfo = ({movieInfo})=>{
    return (
        <div>
            <ul>
                {movieInfo.map(({title, data} , i) =>(
                     (
                        <li className={'movieInfo'} key={i}>
                            <span><strong>{title}:</strong> {data}</span>
                        </li>)
                ))}
            </ul>
        </div>
    )
}
export default MovieInfo;

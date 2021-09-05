import './MovieListCard.css';
const MovieInfo = ({movieInfo})=>{
    console.log(movieInfo);
    return (
        <div>
            <ul>
                {movieInfo.map(({title, data}) =>(
                    data && (
                        <li className={'movieInfo'}>
                            <span><strong>{title}:</strong> {data}</span>
                        </li>)
                ))}
            </ul>
        </div>
    )
}
export default MovieInfo;

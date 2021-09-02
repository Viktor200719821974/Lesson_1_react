
export function MoviesList({item}){
    let url = 'https://image.tmdb.org/t/p/w500/';
    const changeSrcImages = url + item.poster_path;
    return (
        <div>
           <h3> {item.title}</h3>

            <img src={changeSrcImages} alt={item.title}/>

        </div>
    )
}
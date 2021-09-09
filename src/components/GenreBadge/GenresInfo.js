import {useSelector} from "react-redux";

const GenresInfo = ()=>{
    const storeData = useSelector(state => state.moviesReducer);
    return (
        <div>
<h1>Favorite Page</h1>
        </div>
    )
}
export default GenresInfo;
import {useEffect} from "react";
import {getMovies} from "./service/movieService";
import {useSelector,useDispatch} from "react-redux";
import {Header} from "./components/Header";
function App() {
    // let state = useSelector(state => state);
    // let dispatch = useDispatch();
    // let {movies} = state;
  useEffect(() => {
    getMovies().then(value => console.log(value.data.results.backdrop_path)
    );
  }, []);
  return (
      <div>
        <Header/>
      </div>
  );
}

export default App;
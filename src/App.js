import {useEffect} from "react";
import {getMovies} from "./service/movieService";
import {useSelector,useDispatch} from "react-redux";

import {Header} from "./components/Header";
import {MoviesListCard} from "./components/MoviesListCard";
function App() {
    // let state = useSelector(state => state);
    // let dispatch = useDispatch();
    // let {movies} = state;
  // useEffect(() => {
  //   getMovies().then(value => console.log(value.data)

  //   );
  // }, []);

  return (
      <div>
        <Header/>
          <MoviesListCard/>
      </div>
  );
}

export default App;

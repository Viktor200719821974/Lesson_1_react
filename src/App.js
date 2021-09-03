import {useEffect} from "react";
import {getMovies} from "./service/movieService";
import {useSelector,useDispatch} from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Link, Switch,
} from "react-router-dom";
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
      <Router >
      <div>
          {/*<Header/>*/}

          <Link to={'/'}>Back</Link>
          {/*<Link to={'/MoviesListCard'}>movie</Link>*/}

      </div>

          {/*<Route  path={'/MoviesListCard'} component={MoviesListCard}/>*/}

          <Route exact path={'/'} component={Header}/>


          </Router>
  );
}

export default App;

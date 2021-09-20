import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MenNav/MenNav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@mui/material";
import Trending from "./components/Trending/Trending";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import Favorite from "./components/Favorite/Favorite";
import Search from "./components/Search/Search";


function App() {
  return (
      <BrowserRouter>
        <Header/>
    <div className={'app'}>
<Container>
    <Switch>
        <Route path={'/'} component={Trending} exact></Route>
        <Route path={'/movies'} component={Movies}></Route>
        <Route path={'/series'} component={Series}></Route>
        <Route path={'/favorite'} component={Favorite}></Route>
        <Route path={'/search'} component={Search}></Route>
    </Switch>
</Container>
    </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;

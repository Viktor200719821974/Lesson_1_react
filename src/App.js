import {
  BrowserRouter as Router,
    Switch,
    Route,
  Link,
    withRouter
} from "react-router-dom";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
function App() {
  return (
      <Router>
    <div>
      <Link to={'/'}>App</Link>
        <br/>
      <Link to={'./components/Users'}>Users-page</Link>
        <br/>
      <Link to={'./components/Posts'}>Posts-page</Link>
        <br/>
      <Link to={'./components/Comments'}>Comments-page</Link>
        <br/>
    </div>
        <hr/>
        <div>
          <Route path={'/components/Users'} render={() => <Users/>}/>
        </div>
        <div>
          <Route path={'/components/Posts'} render={() => <Posts/>}/>
        </div>
          <div>
              <Route path={'/components/Comments'} render={() => <Comments/>}/>
          </div>
        </Router>

  );
}

export default App;

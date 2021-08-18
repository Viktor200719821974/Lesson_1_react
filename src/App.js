import {
  BrowserRouter as Router,
    Switch,
    Route,
  Link,
    withRouter
} from "react-router-dom";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
function App() {
  return (
      <Router>
    <div>
      <link to={'/'}>App</link>
      <link to={'./components/Users'}>Users-page</link>
      <link to={'./components/Posts'}>Posts-page</link>
      <link to={'./components/Comments'}>Comments-page</link>
    </div>
        <hr/>
        <div>
          <Route path={'./components/Users'}>
            <Users/>
          </Route>
        </div>
        <div>
          <Route path={'/components/Posts'} component={Posts}/>

        </div>
        </Router>
  );
}

export default App;

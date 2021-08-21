import  {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
function App() {
  return (
<Router>
    <div>
      <Link to={'/'}>App</Link>
      <br/>
<Link to={'/Users'}>Page Users</Link>
      <br/>
        <Link to={'/Posts'}>Page Posts</Link>
      <hr/>
    </div>
  <Route path={'/Users'} component={Users}/>
  <Route path={'/Posts'} component={Posts} />
</Router>
  );
}

export default App;

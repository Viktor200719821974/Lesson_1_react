import  {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import {Users} from "./components/Users";
import {StatikUserDetails} from "./components/StatikUserDetails";
function App() {
  return (
<Router>
    <div>
      <Link to={'/'}>App</Link>
      <br/>
<Link to={'/Users'}>Page Users</Link>
      <br/>
      <hr/>
    </div>
  <Route path={'/Users'} component={Users}/>
</Router>
  );
}

export default App;

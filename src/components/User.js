import {
    BrowserRouter as Router,
    Link, Route,
} from "react-router-dom";
import {UserDetails} from "./UserDetails";
export function User({item, history}){
    let navigate = () =>{
        history.push('/users/'+ item.id,item);
    };
    return(
        <div>
<p>{item.name}  <button onClick={navigate}>user detrail programmaticly</button></p>
    {/*<Link to={{pathname: '/users/'+ item.id}}>user statik details</Link>*/}
            {/*<Route path={'/users/'+ item.id} component={UserDetails}></Route>*/}
        </div>
    )
}
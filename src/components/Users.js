import {useEffect, useState} from "react";
import {User} from "./User";
import {getUsers} from "../service/users.service";
import {StatikUserDetails} from "./StatikUserDetails";
import {Route} from "react-router-dom";
import {UserDetails} from "./UserDetails";
export function Users(props){
    let {match: {url}, history} = props;
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    },[]);
    return (
        <div>
            {users.map(value => <User item={value} history={history} key={value.id}/>)}
            {/*<Route path={`${url}/:id`} render={(props) => {*/}
            {/*    return <StatikUserDetails {...props}/>*/}
            {/*}}/>*/}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
        </div>
    )
}
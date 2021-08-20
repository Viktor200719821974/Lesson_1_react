import {useEffect, useState} from "react";
import {getUser} from "../service/users.service";

export function UserDetails({history, match:{params:{id}}}){
    let [user, setUser] = useState({});
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}));
    },[id]);
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}
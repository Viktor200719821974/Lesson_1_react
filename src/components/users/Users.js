import {useEffect, useState} from "react";
import {User} from "../user/User";
import {getUsers} from "../../service/users.service";

export  function Users(item){

    let [users, setUsers] = useState( []);
    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[]);
    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)

            }
        </div>
    );
}
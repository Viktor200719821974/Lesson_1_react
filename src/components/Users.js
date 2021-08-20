import {useEffect, useState} from "react";
import {User} from "./User";
import {getUsers} from "../service/users.service";
export function Users(item){
    let [users, setUsers] = useState( []);
    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[]);
    return (
            <div className={'user'}>
                {
                    users.map(value => <User item={value} key={value.id} />)
                }
            </div>


    );
}
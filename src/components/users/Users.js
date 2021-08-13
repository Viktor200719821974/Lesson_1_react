import {useEffect, useState} from "react";
import {User} from "../user/User";
import {getUsers} from "../../service/users.service";
import {getPost} from "../../service/posts.service";

export  function Users(item){

    let [users, setUsers] = useState( []);
    let[posts, setPosts] = useState([null]);
    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[]);


    const chosePost = (y) =>{
        setPosts({...y});
        getPost(y.id).then(value => setPosts([...value]));
    }
    return (
        <div>
            <div>
            {
                users.map(value => <User item={value} key={value.id} chosePost={chosePost}/>)
            }
            </div>

            {users && <div>(JSON.stringify(posts)</div>}

        </div>
    );
}
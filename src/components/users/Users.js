import {useEffect, useState} from "react";
import {User} from "../user/User";
import {getUsers} from "../../service/users.service";
import {getPost} from "../../service/posts.service";
import {Posts} from "../posts/Posts";
import Users.css


export  function Users(item){

    let [users, setUsers] = useState( []);
    let[posts, setPosts] = useState([]);
    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[]);


    const chosePost = (y) =>{
        getPost(y.id).then(value => setPosts([...value]));

    }
    return (
        <div className={'users'}>
            <div className={'user'}>
            {
                users.map(value => <User item={value} key={value.id} chosePost={chosePost}/>)
            }
            </div>
<div className={'posts'}>
                {

                }
        </div>
        </div>
    );
}
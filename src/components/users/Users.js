import {useEffect, useState} from "react";
import {User} from "../user/User";
import {getUsers} from "../../service/users.service";
import {getPost} from "../../service/posts.service";
import './Users.css';
import {Posts} from "../posts/Posts";

export  function Users(item){

    let [users, setUsers] = useState( []);
    let [user, setUser] = useState([null])
    let[posts, setPosts] = useState([]);

    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[]);


    const chosePost = (y) =>{
        setUser({...y})
        getPost(y.id).then(value => setPosts([...value]));
    }
    return (
        <div className={'users'}>
            <div className={'user'}>
            {
                users.map(value => <User item={value} key={value.id} chosePost={chosePost}/>)
            }
            </div>
            <div  className={'user'}>
            {
          user && posts.map(value => <Posts item={value} key={value.id}/>)
            }
        </div>
        </div>
    );
}
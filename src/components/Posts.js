import {useEffect, useState} from "react";
import {getPosts} from "../service/posts.service";
import {Post} from "./Post";
export  function Posts(item){

    let [posts, setPosts] = useState( []);

    useEffect(() =>{
        getPosts().then(value => setPosts([...value]));
    },[]);
    return (
        <div className={'posts'}>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
        </div>
    );
}
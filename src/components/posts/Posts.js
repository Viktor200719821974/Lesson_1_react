import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {getPost, getPosts} from "../../service/posts.service";
import './Posts.css';

export  function Posts(item){

    let [posts, setPosts] = useState( []);
    let [post, setPost] = useState([null])


    useEffect(() =>{
        getPosts().then(value => setPosts([...value]));
    },[]);


    const choosePost = (id) => {
        let choosenPost = posts.find(value => value.id == id);
        setPost(choosenPost);
    }
    return (
        <div className={'posts'}>
            <div className={'post'}>
                {
                    posts.map(value => <Post item={value} key={value.id} choosePost={choosePost} post={post}/>)
                }
            </div>

        </div>
    );
}


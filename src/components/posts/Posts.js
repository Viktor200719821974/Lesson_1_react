import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {getPostId, getPosts} from "../../service/posts.service";
import './Posts.css';

export  function Posts(item){

    let [posts, setPosts] = useState( []);
    let [post, setPost] = useState([]);
    console.log(posts);

    useEffect(() =>{
        getPosts().then(value => setPosts([...value]));
    },[]);


    const choosePost = (id) => {
        let choosenPost = posts.find(value => value.id == id);
        setPost(choosenPost);
       // getPostId(id).then(value => setPost([...value]));
        console.log(post);
    }
    return (
        <div className={'posts'}>
            <div className={'post'}>
                {
                     posts.map(value => <Post item={value} key={value.id} choosePost={choosePost} post={post}/>)
                }
            </div>
            {<div>{post.body}</div>}
        </div>
    );
}


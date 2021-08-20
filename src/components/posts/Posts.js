import {useEffect, useState} from "react";
import {Post} from "../post/Post";
import {getPostId, getPosts} from "../../service/posts.service";
import './Posts.css';
import {buttonComment} from "../../service/buttonComment";
export  function Posts(item){

    let [posts, setPosts] = useState( []);
    let [post, setPost] = useState([null]);

    useEffect(() =>{
        getPosts().then(value => setPosts([...value]));
    },[]);


    const choosePost = (id) => {
        let choosenPost = posts.find(value => value.id == id);
        setPost(choosenPost);
       // getPostId(id).then(value => value.id === id);
       //  setPost(choosenPost);
        buttonComment(id);
    }
    return (
        <div className={'posts'}>
            <div className={'post'}>
                {
                     posts.map(value => <Post item={value} key={value.id} choosePost={choosePost} post={post}/>)
                }
            </div>
            {<div>
                <p>{post.id}. {post.body}</p>

            </div>}
        </div>
    );
}


import {useEffect, useState} from "react";
import {getPost} from "../service/posts.service";

export function PostDetails({history, match:{params:{id}}}){
    let [post, setPost] = useState({});

    useEffect(()=>{
        getPost(id).then(value => setPost({...value}));
    },[id]);
    return (
        <div>
            <h3>{post.userId}.{post.id}. {post.body}</h3>
        </div>
)
}
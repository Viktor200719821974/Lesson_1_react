import {useEffect, useState} from "react";
import {getComment} from "../../service/comment.service";
import {Comments} from "../comments/Comments";

export function Post({item}){
    let [comments, setComments] = useState( []);
    useEffect(() =>{
        getComment(item.id).then(value => setComments([...value]));
    },[item.id]);
    return(
        <div>
            <h3>Posts of users {item.userId}:</h3>
            <ul>
                <li><strong>{item.title}</strong></li>
               <p> {item.body}</p>
            </ul>

            <div>
                <h3>Comments of users {item.userId}:</h3>
                <Comments comments = {comments}/>
            </div>
        </div>
    )

}
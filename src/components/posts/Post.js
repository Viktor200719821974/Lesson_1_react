import {useEffect, useState} from "react";
import {getComment, getComments} from "../../service/comment.service";
import {Comments} from "../comments/Comments";

export function Post({item}){
    let [comments, setComments] = useState( []);
    useEffect(() =>{
        getComment(item.id).then(value => setComments([...value]));
    },[item.id]);
    return(
        <div>
            <ul>
                <li><strong>{item.title}</strong></li>
                {item.body}
            </ul>

            <div>
                <h3>Comments of users:</h3>
                <Comments comments = {comments}/>
            </div>
        </div>
    )

}
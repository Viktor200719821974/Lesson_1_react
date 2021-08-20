import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";
import {Comment} from "../comment/Comment";
export  function Comments(item){

    let [comments, setComments] = useState( []);
    let [comment, setComment] = useState([null])


    useEffect(() =>{
        getComments().then(value => setComments([...value]));
    },[]);


    const chooseComment = (id) =>{
        let choosenComment = comments.find(value => value.id === id);
        setComment(choosenComment);

    }
    return (
        <div className={'comments'}>

                {
                    comments.map(value => <Comment item={value} key={value.id} chooseComment={chooseComment} comment={comment}/>)
                }
            {<div><p>{comment.id}. {comment.body}</p></div>}

        </div>
    );
}

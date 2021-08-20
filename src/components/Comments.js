import {useEffect, useState} from "react";
import {getComments} from "../service/comments.service";
import {Comment} from "./Comment";
export  function Comments(item){

    let [comments, setComments] = useState( []);

    useEffect(() =>{
        getComments().then(value => setComments([...value]));
    },[]);
    return (
        <div>

            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }


        </div>
    );
}
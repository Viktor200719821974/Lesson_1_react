import {Comment} from "./comment";

export  function Comments({comments}){


    return (
        <div>
            {
               comments.map(value => <Comment item={value} key={value.id}/>)

            }
        </div>
    );
}
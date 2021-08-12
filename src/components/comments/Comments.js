import {Comment} from "./Comment";

export  function Comments({comments}){


    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)

            }
        </div>
    );
}
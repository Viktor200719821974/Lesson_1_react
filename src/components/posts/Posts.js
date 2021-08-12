import {Post} from "../posts/Post";

export  function Posts({posts}){
    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)

            }
        </div>
    );
}
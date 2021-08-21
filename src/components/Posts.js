import {useEffect, useState} from "react";
import {getPosts} from "../service/posts.service";
import {Post} from "./Post";
import {
     Route,
} from "react-router-dom";
import {PostDetails} from "./PostDetails";
export function Posts(props){
    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]));
    },[]);
    return (
        <div>
            {posts.map(value => <Post item={value} history={history} key={value.id}/>)}
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </div>
    )
}
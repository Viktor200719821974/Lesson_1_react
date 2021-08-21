import {
    Link,
} from "react-router-dom";
export function Post({item}){

    return(
        <div>
<h2>{item.userId}.{item.id}.{item.title}</h2>
            <Link to={{pathname: '/posts/'+ item.id}}>post statik details</Link>
        </div>
    )
}
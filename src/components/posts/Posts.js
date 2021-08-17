export function Posts({item}){
    return (
        <div>
<ul>
<li>{item.userId}.{item.title}</li>
    <li>{item.body}</li>
</ul>
        </div>
    );
}
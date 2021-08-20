export function Comment({item}){
    return (
        <div >
            <h3>{item.postId}. {item.id}. {item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
        </div>
    )
}
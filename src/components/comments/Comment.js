export function Comment({item}){
    return(
        <div>
            <ul>
           <li> <strong>{item.name}</strong></li>
                <li><strong>emailUser:</strong>{item.email}</li>
                <p>{item.body}</p>
        </ul>
        </div>
    )
}
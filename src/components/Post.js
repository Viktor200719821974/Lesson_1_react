export function Post({item}){

    return (
        <div >
            <h3>{item.userId}. {item.id}. {item.title}</h3>
        </div>
    )
}
export function Car({item}){
    return (
        <div>
            <h2>{item.id}.{item.model}</h2>
            <p>{item.price}- {item.year}</p>
        </div>
    )
}
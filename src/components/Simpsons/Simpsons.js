 export function Simpsons({name,image,info}){
    return (
    <div className={'target'}>
    <h2>{name}</h2>
        <img src={image} alt="Simpsons"/>
    <p>{info}}</p>

    </div>
    )
}
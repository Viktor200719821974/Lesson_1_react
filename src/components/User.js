export function User({item, history}){
    let navigate = () =>{
        history.push('/users/'+ item.id,item);
    };
    return(
        <div>
<p>{item.name}  <button onClick={navigate}>user detrail programmaticly</button></p>
        </div>
    )
}
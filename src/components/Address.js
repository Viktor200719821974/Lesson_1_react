import Geo from "./Geo";

export default function Address({address: {street,suite,city,zipcode,geo}}){
    return (
<div>
            <p><strong>Street:</strong> {street} <strong>Suite:</strong> {suite}</p>
            <p><strong>City:</strong>{city} <strong>Zipcode:</strong> {zipcode}</p>
            <h3>Geo:</h3>
    <Geo geo = {geo}/>
</div>
    )
}
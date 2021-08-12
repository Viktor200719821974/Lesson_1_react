export default function Address({street,suite,city,zipcode}){
    return (
<div>
    <h3>Address:</h3>
            <p><strong>Street:</strong> {street} <strong>Suite:</strong> {suite}</p>
            <p><strong>City:</strong> {city} <strong>Zipcode:</strong> {zipcode}</p>
</div>
    )
}
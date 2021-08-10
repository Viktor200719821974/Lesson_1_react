
export function Address({street,suite,city,zipcode}){
    return (
        <div>
            <p><strong>Street:</strong> {street} <strong>Suite:</strong> {suite}</p>
            <p><strong>City:</strong>{city} <strong>Zipcode:</strong> {zipcode}</p>
            <h3>Geo:</h3>
        </div>
    )
}
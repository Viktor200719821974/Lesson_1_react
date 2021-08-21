import {useEffect, useState} from "react";
import {getUser} from "../service/users.service";
export function UserDetails({history, match:{params:{id}}}){
    let [user, setUser] = useState({});
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}));
    },[id]);
    return (
        <div>
            <h3>Username: {history.location.state.username} - email: {history.location.state.email}</h3>
            <strong>Address:</strong>
            <p>Street: {history.location.state.address.street}</p>
            <p>Suite: {history.location.state.address.suite}</p>
            <p>City: {history.location.state.address.city}</p>
            <p>Zipcode: {history.location.state.address.zipcode}</p>
            <strong>Geo:</strong>
            <p>Lat: {history.location.state.address.geo.lat}</p>
            <p>Lng: {history.location.state.address.geo.lng}</p>
            <strong>Company:</strong>
            <p>Name Company: {history.location.state.company.name}</p>
            <p>CatchPhrase: {history.location.state.company.catchPhrase}</p>
            <p>Bs: {history.location.state.company.bs}</p>
        </div>
    )
}
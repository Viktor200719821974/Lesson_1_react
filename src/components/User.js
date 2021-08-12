import Address from "./Address";

export default function User({item, item:{address} }){
   return(
       <div>
           <h3>{item.id}.Name: {item.name} - Username: {item.username}</h3>
           <p><strong>email:</strong> {item.email} </p>
           <h3>Address:</h3>
           <Address address = {address}/>
           <p><strong>phone: </strong>{item.phone} <strong>website:</strong> {item.website}</p>
           <h3>Company:</h3>
           <p><strong>NameCompany:</strong> {item.nameCompany} </p>
           <p><strong>CathPhrase: </strong>{item.catchPhrase} </p>
           <p><strong>bs:</strong> {item.bs}</p>
       </div>
   )
}

export default function User({props}){
    return(
       <div>
           <h3>{props.id}.Name: {props.name} - Username: {props.username}</h3>
           <p><strong>email:</strong> {props.email} </p>
           <p><strong>phone: </strong>{props.phone} <strong>website:</strong> {props.website}</p>
           <h3>Company:</h3>
           <p><strong>NameCompany:</strong> {props.nameCompany} </p>
           <p><strong>CatchPhrase: </strong>{props.catchPhrase} </p>
           <p><strong>bs:</strong> {props.bs}</p>
       </div>
   )
}
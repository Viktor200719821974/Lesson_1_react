export function Users({id,name, username,email,phone,website,nameCompany,catchPhrase,bs})
{
return (
<div>
        <h3>{id}.Name: {name} - Username: {username}</h3>
        <p><strong>email:</strong> {email} </p>
        <p><strong>phone: </strong>{phone} <strong>website:</strong> {website}</p>
        <h3>Company:</h3>
        <p><strong>NameCompany:</strong> {nameCompany} </p>
        <p><strong>CathPhrase: </strong>{catchPhrase} </p>
        <p><strong>bs:</strong> {bs}</p>
        <h3>Address:</h3>
</div>
)
}


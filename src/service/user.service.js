function getUsers(){
return fetch('http://jsonplaceholder.typicode.com/users')
.then(value => value.json())
}
function getUser(id){
    return fetch('http://jsonplaceholder.typicode.com/users/'+ id)
        .then(value => value.json())
}

export {getUsers, getUser};
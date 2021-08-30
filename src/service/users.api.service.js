let url = 'http://jsonplaceholder.typicode.com/users';
const fetchUsers = () => {
    return fetch(url)
        .then(value => value.json())
}
const addUser = (user) =>{
    return fetch(url, {
        method: 'POST',
        headers: {'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(value => value.json());
}
export {fetchUsers, addUser};
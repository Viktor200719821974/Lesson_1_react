function getPosts(){
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}
function getPost(userId){
    return fetch('http://jsonplaceholder.typicode.com/users/'+ userId + '/posts')
        .then(value => value.json())
}

export {getPosts, getPost};
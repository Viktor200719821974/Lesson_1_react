function getComments(){
    return fetch('http://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
}
function getComment(postId){
    return fetch('http://jsonplaceholder.typicode.com/posts/' + postId + 'comments/')
        .then(value => value.json())
}

export {getComments, getComment};
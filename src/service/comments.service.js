function  getComments ( ) {
    return  fetch ( 'http://jsonplaceholder.typicode.com/comments' )
        .then ( value  =>  value . json ( ) )
}
export {getComments};
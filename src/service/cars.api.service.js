function getCars(){
    return fetch('http://91.201.233.14/api/v1/cars')
        .then(value => value.json())
}
const deleteCar=(car) => {
    fetch('http://91.201.233.14/api/v1/cars', {
        method: 'DELETE',
        // body: JSON.stringify(car),
        // id: car.id,
        // model: car.model,
        // price: car.price,
        // year: car.year,
        // headers: {'Content-type': 'application/json; charset=UTF-8...'},
    })
        .then((response) => response.json())
}
export {getCars, deleteCar};
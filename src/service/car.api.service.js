const saveCar=(car) => {
    fetch('http://91.201.233.14/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        id: car.id,
        model: car.model,
        price: car.price,
        year: car.year,
        headers: {'Content-type': 'application/json; charset=UTF-8...'},
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {saveCar};
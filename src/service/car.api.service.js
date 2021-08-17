const saveCar=(car) => {
    fetch('', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {'Content-type': 'application/json; charset=UTF-8...'},
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {saveCar};
import {useEffect, useState} from "react";
import {getCars} from "./service/cars.api.service";
import {deleteCar} from "./service/cars.api.service";
function App() {
  let [cars, setCars] = useState([]);
  useEffect(() =>{
    getCars() .then(value =>  setCars([...value]));
  },[cars.id]);
  const deleteCars = (e) => {
    // e.preventDefault();
    deleteCar().then((json) => console.log(json));
  }
  const editCars = (e) => {

  }
  return (

    <div>
      {
        cars.map(value => <div>
          {value.id}. {value.model}
        <br/>
          {value.price} - {value.year}
          <br/>
          <button onClick={deleteCars}>delete</button>
          <button onClick={editCars}>edit</button>
          <br/>
          <hr/>
        </div>)
      }
    </div>
  );
}

export default App;

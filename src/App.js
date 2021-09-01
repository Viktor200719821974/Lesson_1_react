import {useEffect} from "react";
import {discoverMovie} from "./service/movieService";

function App() {
  useEffect(()=>{
    discoverMovie().then(value => console.log(value.data))
  },[])
  return (
    <div>
    </div>
  );
}

export default App;

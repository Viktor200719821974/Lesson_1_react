import {useReducer} from "react";
import {reducer} from "./service/reducer";

function App() {
  let [state, dispatch]= useReducer(reducer,0);
  return (
    <div >
<h1>{state}</h1>
      <button onClick={() => dispatch('+')}>dispatch</button>
      <button onClick={() => dispatch('-')}>dispatch</button>
    </div>
  );
}

export default App;

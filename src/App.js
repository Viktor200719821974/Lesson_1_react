import {useReducer} from "react";
import {reducer} from "./service/reducer";

function App() {
  let [state,dispatch]= useReducer(reducer,{a:0,b:0,c:0});
  let {a,b,c}= state;
  return (
    <div >
<h1>a:{a}</h1>
      <button onClick={()=>dispatch({obj:'1', diya:'+'})}>+</button>
      <button onClick={()=>dispatch({obj:'1', diya:'-'})}>-</button>
      <h1>b:{b}</h1>
      <button onClick={()=>dispatch({obj:'2', diya:'+'})}>+</button>
      <button onClick={()=>dispatch({obj:'2', diya:'-'})}>-</button>
      <h1>c:{c}</h1>
      <button onClick={()=>dispatch({obj:'3', diya:'+'})}>+</button>
      <button onClick={()=>dispatch({obj:'3', diya:'-'})}>-</button>
    </div>
  );
}

export default App;

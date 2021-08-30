import {saveCar} from "../service/car.api.service";
import {useState} from "react";
export function SuperForm(){
    let [formState, setFormState] = useState({id: '', model: '', price: '', year: ''})

    let save = (e) =>{
        e.preventDefault();
        saveCar(formState);
    }
    let onFormInputChange = (e) =>{
        setFormState({...formState,[e.target.name]: e.target.value});
    };
    return(
        <div>
            <form onSubmit={save}>
               Введіть id: <input type="number" name={'id'} value={formState.id} onChange={onFormInputChange}/>
                <br/>
                <br/>
                Введіть модель: <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <br/>
                <br/>
                Введіть ціну: <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange} />
                <br/>
                <br/>
                Введіть рік: <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <br/>
                <br/>
                <input type="submit" value={'Зберегти'}/>
            </form>
            <br/>
            <hr/>
            {<div>
           <h2>  {formState.id}.{formState.model}</h2>
              <p>{formState.price} - {formState.year}</p>
            </div>}
        </div>
    )
}
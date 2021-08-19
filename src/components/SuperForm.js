import {saveCar} from "../service/car.api.service";
import {useState} from "react";
export function SuperForm(){
    let [formState, setFormState] = useState({id: '', model: '', price: '', year: ''})
    let onFormInputChange = (e) =>{
        setFormState({...formState,[e.target.name]: e.target.value});
    };
    let save = (e) =>{
        e.preventDefault();
        saveCar(formState);
    }

    return(
        <div>
            <form onSubmit={save}>
                <input type="number" name={'id'} value={formState.id} onChange={onFormInputChange}/>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange} />
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <input type="submit"/>
            </form>
            {<div>

              <h2>  {formState.id}.{formState.model}</h2>
                <p>{formState.price} - {formState.year}</p>
            </div>}
        </div>
    )
}
import {saveCar} from "../service/car.api.service";

export function Forms(){
    let onFormSubmit =(e) =>{
        e.preventDefault();
        let carToSave = {id: e.target.id.value, model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
        saveCar(carToSave);
    }
    return(
        <div>
            <form onSubmit={onFormSubmit }>
                <input type="number" name={'id'} placeholder={'enter id'}/>
                <input type="text" name={'model'} placeholder={'enter model'}/>
                <input type="number" name={'price'} placeholder={'enter price'}/>
                <input type="number" name={'year'} placeholder={'enter year'}/>
                <button>save</button>
            </form>
        </div>
    )
}
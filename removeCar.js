import cars from './cars.data.js'

export function removeCar(color, make, model, reg_Number) {
        return cars.filter(car => 
            car.color !== color || 
            car.make !== make || 
            car.model !== model || 
            car.reg_Number !== reg_Number
        );
    }






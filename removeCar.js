import cars from './cars.data.js'

export function removeCar(reg_Number) {
        return cars.filter(car => 
            
            car.reg_number !== reg_Number
        );
    }






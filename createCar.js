import cars from './cars.data.js'

export function createCar(color, make, model, reg_Number) {
    let newCar = { color: color, 
        make: make, 
        model: model, 
        reg_Number: reg_Number };
    
   
    cars.push(newCar);
    
 
    return cars;
}

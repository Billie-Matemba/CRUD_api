import express from 'express';
import cors from 'cors';
import { mostPopularCar } from './mostPopularCar.js';
import {createCar} from './createCar.js'
import { removeCar } from './removeCar.js';
import cars from './cars.data.js'
// console.log(cars[0]);
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));
app.use(cors());

//read data
app.get('/api/Cars', function(req,res){
    res.json({
        cars:cars
    });
});

// most popular car
app.get('/api/popularCar', function(req,res){
    // const cars = req.query.cars;
    const popularCar = mostPopularCar(cars);
    res.json({
        mostPopularCar: popularCar
    });
});

//add cars
app.post('/api/addCar', function(req,res){
    // const cars = req.body.cars;
    const {color, make, model, reg_number} = req.body;
   
    
    const cars = createCar(color, make, model, reg_number);
    // cars.push(updatedCars)
    
    res.json({
        message: 'Car added successfully!',
       cars
    });

});

//remove cars
app.post('/api/removeCar', function(req,res){
    // const cars = req.body.cars;
    const {reg_number} =req.body;
    
    
    const removedCars = removeCar(reg_number);
    
    res.json({
        message: 'Car removed successfully!',
        cars: removedCars
    });
});





// let PORT = process.env.PORT || 3000;
app.listen(3000, function (){
    console.log('App listening on port 3000!')
})
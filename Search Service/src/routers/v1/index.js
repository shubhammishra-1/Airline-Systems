const express =require('express');

const CityController=require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller');

const router= express.Router();


//CRUD for cities


//Create

router.post('/city',CityController.create);


//delete

router.delete('/city/:id',CityController.destroy);

//update

router.patch('/city/:id',CityController.update);

//Read

router.get('/city/:id',CityController.get);

//Read all cities

router.get('/city',CityController.getAll);



//CRUD for flights


//creating flight

router.post('/flights',FlightController.create);

//read all fligts data

router.get('/flights',FlightController.getAll);

//read one flight

router.get('/flights/:id',FlightController.get);


//updating the flight


router.patch('/flights/:id',FlightController.update);


module.exports =router;
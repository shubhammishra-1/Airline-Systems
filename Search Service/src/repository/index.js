//to imports all reposities files in this file so that only that perticular file can be called


module.exports ={

    CityRepository: require('./city-repo'),
    FlightRepository:require('./flight-repo'),
    AirplaneRepository:require('./airplane-repo'),
    AirportRepository: require('./airport-repo'),
    CrudRepository: require('./CRUD-repo')
}

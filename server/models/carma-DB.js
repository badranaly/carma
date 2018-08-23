const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);
module.exports = {
    getAllCars(){
        return db.any('SELECT * FROM cars');
    },

    insertCar(data){
        console.log('data in models', data);
        return db.one(`INSERT INTO cars (make, model, year, vin, registration, diamond) VALUES ($[make], $[model], $[year], $[vin], $[registration], $[diamond]) RETURNING *`, data)
    },
    removeCar(id){
        console.log('car id in models --> ', id)
        return db.none(`DELETE FROM cars WHERE id=$1`, id);
    }
}


const carmaDB = require('../models/carma-DB');

module.exports = {
   getAllCars(req, res){
       carmaDB.getAllCars()
       .then(data => {
           console.log('inside cars controller', data);
           res.json(data)
       })
       .catch(err => {
           console.log('error in backend', err);
       })
   },

   insertCar(req, res){
       console.log('inside insert car controller', req.body)
       carmaDB.insertCar(req.body)
       .then(data => {
           res.json(data)
       })
       .catch(err => {
           console.log(err);
       })
   },

   deleteCar(req, res){
       console.log('deleting car id #', req.params.id);
       carmaDB.removeCar(req.params.id)
       .then(data => {
           res.json('Car Deleted successfuly');
       })
       .catch(err => {
           console.log(err);
       })
   }
}

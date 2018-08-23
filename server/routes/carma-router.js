const router = require('express').Router()
const carmaController = require('../controllers/carma-controller')

router.post('/', carmaController.insertCar);
router.get('/', carmaController.getAllCars);
router.delete('/:id', carmaController.deleteCar);


module.exports = router

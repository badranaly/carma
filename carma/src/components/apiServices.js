import axios from 'axios';

const services = {}

services.getCars = () => {
    return axios({
        method: "GET",
        url: "http://localhost:3001/cars"
    })
}

services.insertCar = (data) => {
    console.log('data inside services', data)
    return axios({
        method: 'POST',
        url: 'http://localhost:3001/cars',
        data: {
            make: data.make,
            model: data.model, 
            year: data.year,
            vin: data.vin, 
            registration: data.registration,
            diamond: data.diamond
        }
    })
}

services.deleteCar = (id) => {
    console.log('deleting car id', id)
    return axios({
        method: "DELETE",
        url: `http://localhost:3001/cars/${id}`,
        data: id
    })
}

export default services;
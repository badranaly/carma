import React, {Component} from 'react';
import './styles.css';
import services from './apiServices';

class SingleCar extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        console.log('ive been clicked!', id);
        services.deleteCar(id)
        .then(data => {
            console.log('this is data from delete', data)
            console.log('this is props', this.props);
            this.props.reload();
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        const stl = {color: 'red', display: 'flex', flexDirection: 'row'};
        const car = this.props.car;
        console.log('inside single car', this.props)
        return (
            <div style={stl}>
            <p>{car.make + " "} {car.model + " "} {car.year} <p onClick={() => this.handleDelete(car.id)}>delete</p></p><br /><br />
            </div>
        )
    }
}

export default SingleCar;
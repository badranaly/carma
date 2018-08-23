import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import services from './apiServices';
import SingleCar from './SingleCar';


const Home = (props) => { 
        console.log('this inside home', props.carData);
        console.log('inside home again', props);
        const car = props.carData;
        return (
        <div className="test">
            <Link to='/addcar'><span className="glyphicon glyphicon-plus" onClick={this.handleClick}></span></Link>{" "}Add Car<br />
            {props.carData ? props.carData.data.map(el => {
               return <SingleCar car={el} reload={props.reload}/> 
            }) : <div>Loading...</div>}            
        </div>
        )
    }

export default Home;
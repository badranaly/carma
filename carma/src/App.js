import React, { Component } from 'react';
import Header from './navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddCar from './components/AddCar';
import services from './components/apiServices';


class App extends Component {
  constructor(props){
    super(props);
    this.state =  { 
      apiData: null
    };
  }

  componentDidMount(){
    this.fetchCars();
}

fetchCars(){
  services.getCars()
  .then(data => {
      console.log('getting data', data)
      console.log(this.props);
      this.setState({
          apiData: data
      })
  })
  .catch(err => {
      console.log(err);
  })
}

  render() {
    const apiData = this.state.apiData
    const HomeComponent = () => <Home carData={apiData} reload={() => this.fetchCars()}/>
    const AddCarComponent = () => <AddCar reload={() => this.fetchCars()} />
    console.log('api data', apiData);
    return (
      <Router>
        <div>
           <Header />
           <Route exact path='/' render={HomeComponent} />
           <Route path='/addcar' render={AddCarComponent} />
        </div>
      </Router>
    );
  }
}

export default App;

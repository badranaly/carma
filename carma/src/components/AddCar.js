import React, {Component} from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import services from './apiServices';

class AddCar extends Component {
    constructor(){
        super();
        this.state = {
            make: '',
            model: '',
            year: '2018',
            vin: '',
            registration: '',
            diamond: '',
            fireRedirect: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleClick(e){    
        services.insertCar(this.state)
        .then(data => {
            this.props.reload();
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleSelectChange(e){
        this.setState({
            year: e.target.value
        })
    }

    render(){
        return(
            <div>
                <br />
                <br />
                <br />
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Make:
                    </Col>
                    <Col sm={3}>
                    <FormControl 
                    type="text" 
                    name="make"
                    placeholder="Car Make" 
                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Model:
                    </Col>
                    <Col sm={3}>
                    <FormControl 
                    type="text"
                    name="model" 
                    placeholder="Car Model"
                    onChange={this.handleChange} 
                     />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                    Year:
                    </Col>
                    <Col sm={1}>
                    <FormControl 
                    componentClass="select" 
                    placeholder="select"
                    name="year"
                    defaultValue={this.state.year}
                    onChange={this.handleSelectChange}
                    >
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                    </FormControl>
                    </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Vin #:
                        </Col>
                        <Col sm={3}>
                        <FormControl 
                        type="text" 
                        placeholder="Vin #" 
                        name="vin"
                        onChange={this.handleChange}
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Registration Exp:
                        </Col>
                        <Col sm={3}>
                        <FormControl 
                        type="text" 
                        name="registration"
                        placeholder="Registration Expiration" 
                        onChange={this.handleChange}
                        />
                        </Col>
                    </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Diamond Expiration:
                    </Col>
                    <Col sm={3}>
                    <FormControl 
                    type="text"
                    name="diamond"
                    placeholder="Diamond Expiration" 
                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <Link to='/' onClick={this.handleClick}>Add</Link>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AddCar;
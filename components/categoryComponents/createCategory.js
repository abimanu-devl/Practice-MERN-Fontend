import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

const initialState = {
    type: "",
    kilometers: 0,
    chargePerKm: 0,
    vehicles: [],
    options: [],
    selectedVehicles: []
}
class createCategory extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onVehicleSelect=this.onVehicleSelect.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/vehicle')
            .then(response => {
                this.setState({ vehicles: response.data.data }, () => {
                    let data = [];
                    this.state.vehicles.map((item, index) => {
                        let vehicles = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(vehicles)
                    });
                    this.setState({ options: data });
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onVehicleSelect(e) {
        this.setState({ selectedVehicles: e ? e.map(item => item.value) : [] });
    }

    onSubmit(e) {
        e.preventDefault();
        let category = {
            type: this.state.type,
            kilometers: this.state.kilometers,
            chargePerKm: this.state.chargePerKm,
            vehicles: this.state.selectedVehicles
        }
        console.log(category);
        axios.post('http://localhost:3001/api/category/add', category)
            .then(response => {
                alert('Category Inserted Successfully')
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
                    <div className="card-header">
                        <h4>Add Category</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Category Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    value={this.state.type}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="kilometers" className="form-label">Kilometers</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="kilometers"
                                    rows="3"
                                    name="kilometers"
                                    value={this.state.kilometers}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="chargePerKm" className="form-label">Price Per Kilometer</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="chargePerKm"
                                    name="chargePerKm"
                                    value={this.state.chargePerKm}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label htmlFor="name" className="form-label">Vehicles</label>
                            <Select
                                options={this.state.options}
                                onChange={this.onVehicleSelect}
                                className="basic-multi-select"
                                isMulti
                            />
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default createCategory;
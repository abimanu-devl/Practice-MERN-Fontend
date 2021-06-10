import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

const initialState = {
    code: "",
    model: "",
    type: "",
    name: "",
    categories: [],
    options: [],
    selectedCategories: []
}
class createVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/category')
            .then(response => {
                this.setState({ categories: response.data.data }, () => {
                    let data = [];
                    this.state.categories.map((item, index) => {
                        let categories = {
                            value: item._id,
                            label: item.type
                        }
                        data.push(categories)
                    });
                    this.setState({ options: data });
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onCategorySelect(e) {
        this.setState({ selectedCategories: e ? e.map(item => item.value) : [] });
    }

    onSubmit(e) {
        e.preventDefault();
        let vehicle = {
            code: this.state.code,
            model: this.state.model,
            type: this.state.type,
            name: this.state.name,
            categories: this.state.selectedCategories
        }
        console.log(vehicle);
        axios.post('http://localhost:3001/api/vehicle/add', vehicle)
            .then(response => {
                alert('Vehicle added successfully');
                console.log(response.data);
            }).catch(error => {
                alert(error.message);
                console.error(error);
            })
    }
    render() {
        return (
            <div className="container">
                <br/>
                <div className="card" style={{ width: "50%",marginLeft: "25%" }}>
                    <div className="card-header">
                        <h4>Add Vehicle</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">Vehicle Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="code"
                                    name="code"
                                    value={this.state.code}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="model" className="form-label">Vehicle Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="model"
                                    rows="3"
                                    name="model"
                                    value={this.state.model}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Vehicle Body Type</label>
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
                                <label htmlFor="name" className="form-label">Vehicle Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label htmlFor="name" className="form-label">Category</label>
                            <Select
                                options={this.state.options}
                                onChange={this.onCategorySelect}
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

export default createVehicle;
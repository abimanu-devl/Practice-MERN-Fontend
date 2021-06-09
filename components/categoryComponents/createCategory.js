import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    type: "",
    kilometers: 0,
    chargePerKm: 0
}
class createCategory extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let category = {
            type: this.state.type,
            kilometers: this.state.kilometers,
            chargePerKm: this.state.chargePerKm
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default createCategory;
import React, { Component } from 'react';
import axios from 'axios';

class viewVehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/vehicle')
            .then(response => {
                console.log(response.data.data);
                this.setState({ vehicles: response.data.data });
            }).catch(error => {
                console.error(error);
            })
    }

    render() {
        return (
            <div className="container">
                <h3>Vehicles</h3>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index) => (
                    <div key={index} className="card mb-3" style={{ width: "50%" }}>
                        <div className="card body">
                            <div className="p-2">
                                <p>Vehicle Code: {item.code}</p>
                                <p>Vehicle Model: {item.model}</p>
                                <p>Vehicle Body Type: {item.type}</p>
                                <p>Vehicle Name: {item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default viewVehicles;
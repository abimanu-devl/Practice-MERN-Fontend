import React, { Component } from 'react';
import axios from 'axios';

class vehiclesInCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: this.props.match.params.id,
            categoryName:'',
            vehicles: []
        }
    }

    componentDidMount(){
        console.log(this.state.categoryId);
        axios.get(`http://localhost:3001/api/category/getVehicles/${this.state.categoryId}`)
        .then(response =>{
            this.setState({vehicles:response.data.vehicles});
            console.log(response.data.vehicles)
        }).catch(error =>{
            console.error(error);
        })

        axios.get(`http://localhost:3001/api/category/${this.state.categoryId}`)
        .then(response =>{
            this.setState({categoryName:response.data.data.type})
            console.log(response.data.data.type);
        }).catch(error =>{
            console.error(error);
        })
        
    }


    render() {
        return (
            <div className="container">
                <h3>Vehicles In {this.state.categoryName}</h3>
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

export default vehiclesInCategory;
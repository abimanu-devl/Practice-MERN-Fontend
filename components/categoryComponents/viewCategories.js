import React, { Component } from 'react';
import axios from 'axios';

class viewCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            totalCharge:''
        }

        this.calculateAmount=this.calculateAmount.bind(this);
        this.vehiclesInEachCategory=this.vehiclesInEachCategory.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/category')
            .then(response => {
                this.setState({ categories: response.data.data });
            })
    }

    calculateAmount(id){
        axios.get(`http://localhost:3001/api/category/totalAmount/${id}`)
        .then(response =>{
            this.setState({totalCharge:response.data});//this setState method can call inside the render function using this.state.totalCharge
            alert('Total Charge for Trip : Rs.'+response.data.totalCharge);
            //this.props.history.push(`/totalAmount/${id}`) use display passad id into another page
        }).catch(error =>{
            console.error(error);
        })
    }

    vehiclesInEachCategory(id){

    }

    render() {
        return (
            <div className="container">
                <h3>Categories</h3>
                {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
                    <div key={index} className="card mb-3" style={{ width: "50%" }}>
                        <div className="card body">
                            <div className="p-2">
                                <p>Trip type: {item.type}</p>
                                <p>Kilometers: {item.kilometers}KM</p>
                                <p>Price per Kilometer: Rs.{item.chargePerKm}</p>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-success" onClick={e => this.calculateAmount(item._id)} style={{ marginLeft: "10px" }}>Calucate Amount</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default viewCategories;
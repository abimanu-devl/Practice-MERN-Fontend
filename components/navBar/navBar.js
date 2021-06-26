import React,{Component} from 'react';

export class navBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Taxi Service</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/createVehicle">Create Vehicle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/createCategory">Create Category</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/viewVehicles">View Vehicles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/viewCategory">View Categories</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navBar;
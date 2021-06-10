import React from 'react';
import NavBar from './components/navBar/navBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createCategory from './components/categoryComponents/createCategory';
import viewCategories from './components/categoryComponents/viewCategories';
import createVehicle from './components/vehicleComponents/createVehicle';
import viewVehicles from './components/vehicleComponents/viewVehicles';
import vehiclesInCategory from './components/categoryComponents/vehiclesInCategory';

const App = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path ="/" component={viewVehicles} />
                    <Route path ="/viewVehicles" component={viewVehicles} />
                    <Route path ="/viewCategory" component={viewCategories}/>
                    <Route path="/createCategory" component={createCategory} />
                    <Route path="/createVehicle" component={createVehicle} />
                    <Route path="/getVehicles/:id" component={vehiclesInCategory} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
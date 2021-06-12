import React from 'react';
import renderer from 'react-test-renderer';

test(" View Vehicles in the Database ", () => {
    const component = renderer.create(<viewVehicles />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

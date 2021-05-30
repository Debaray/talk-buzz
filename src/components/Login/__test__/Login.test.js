import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import {cleanup} from '@testing-library/react';
afterEach(cleanup);

it("renders without crashing",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
    ReactDOM.unmountComponentAtNode(div);
})
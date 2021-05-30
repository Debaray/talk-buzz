import React from 'react';
import ReactDOM from 'react-dom';
import Talkbuzz from '../Talkbuzz';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("matches snapshot", () =>{
    const tree = renderer.create(<Talkbuzz></Talkbuzz>).toJSON();
    expect(tree).toMatchSnapshot();
 })
/* eslint-env jest */

import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Error from '../components/Error';

Enzyme.configure({adapter: new Adapter()});

describe('With Enzyme', () => {
  it('Error shows "Welcome to next.js!"', () => {
    const app = shallow(<Error code="Welcome to next.js!" />);

    expect(app.find('h1').text()).toEqual('Welcome to next.js!');
  });
});

describe('With Snapshot Testing', () => {
  it('Error shows "Welcome to next.js!"', () => {
    const component = renderer.create(<Error />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import App from './App.jsx';
import { shallow } from 'enzyme';
import React from 'react';

it('just testing enzyme', () => {
  const wrapper = shallow(<App />);
  expect(2).toBe(2);
});
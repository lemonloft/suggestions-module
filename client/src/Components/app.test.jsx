import App from './App.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe('<App />', () => {
  it('renders a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div><ActivityHeader /></div>)).toEqual(true);
    expect(wrapper.contains(<div>Bye</div>)).toEqual(false);
  });
});
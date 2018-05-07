import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '@/App';
import FunctionalComponent from '@/components/FunctionalComponent';
import ClassComponent from '@/components/ClassComponent';

describe('App', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render routed components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route).at(0).props().render())
      .toEqual(<FunctionalComponent name="Functional Component" />);
    expect(wrapper.find(Route).at(1).props().render())
      .toEqual(<ClassComponent name="Class Component" />);
  });
});

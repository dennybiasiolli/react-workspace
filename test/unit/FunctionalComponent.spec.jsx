import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FunctionalComponent from '@/FunctionalComponent';

describe('FunctionalComponent', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<FunctionalComponent name="Class Component" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

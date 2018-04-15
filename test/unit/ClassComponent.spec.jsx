import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ClassComponent from '@/ClassComponent';

describe('ClassComponent', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<ClassComponent name="Class Component" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

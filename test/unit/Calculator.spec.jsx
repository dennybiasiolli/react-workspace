import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Calculator from '@/Calculator';

describe('Calculator', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<Calculator />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

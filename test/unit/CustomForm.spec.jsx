import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CustomForm from '@/CustomForm';

describe('CustomForm', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<CustomForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TemperatureInput from '@/TemperatureInput';

describe('TemperatureInput', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      temperature: '100',
      scale: 'c',
      onTemperatureChange: jest.fn(),
    };
    const wrapper = shallow(<TemperatureInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

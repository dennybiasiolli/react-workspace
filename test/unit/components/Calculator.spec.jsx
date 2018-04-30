import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Calculator from '@/components/Calculator';
import TemperatureInput from '@/components/TemperatureInput';

describe('Calculator', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      celsius: 'celsius',
      fahrenheit: 'fahrenheit',
      onCelsiusChange: jest.fn(),
      onFahrenheitChange: jest.fn(),
    };
    const wrapper = shallow(<Calculator {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onCelsiusChange from first TemperatureInput', () => {
    const props = {
      celsius: '',
      fahrenheit: '',
      onCelsiusChange: jest.fn(),
      onFahrenheitChange: jest.fn(),
    };
    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find(TemperatureInput).at(0).simulate('temperatureChange', 123);
    expect(props.onCelsiusChange).toHaveBeenCalledWith(123);
  });

  test('should call onFahrenheitChange from first TemperatureInput', () => {
    const props = {
      celsius: '',
      fahrenheit: '',
      onCelsiusChange: jest.fn(),
      onFahrenheitChange: jest.fn(),
    };
    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find(TemperatureInput).at(1).simulate('temperatureChange', 123);
    expect(props.onFahrenheitChange).toHaveBeenCalledWith(123);
  });
});

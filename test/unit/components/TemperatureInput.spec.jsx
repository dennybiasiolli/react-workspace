import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TemperatureInput from '@/components/TemperatureInput';

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

  test('changing input should call onTemperatureChange prop', () => {
    const props = {
      temperature: '100',
      scale: 'c',
      onTemperatureChange: jest.fn(),
    };
    const wrapper = shallow(<TemperatureInput {...props} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleChange');
    const e = { target: { value: 'new value' } };
    wrapper.find('input').simulate('change', e);
    expect(instance.handleChange).toHaveBeenCalledWith(e);
    expect(props.onTemperatureChange).toHaveBeenCalledWith('new value');
  });
});

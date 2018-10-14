import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CalculatorComponent from '@/components/Calculator';
import ConnectedCalculator from '@/containers/Calculator';
import { setCelsius, setFahrenheit } from '@/store/actions';

jest.mock('@/store/actions', () => ({
  setCelsius: jest.fn(),
  setFahrenheit: jest.fn(),
}));

const state = {
  temperatures: {
    celsius: '',
    fahrenheit: '',
  },
};

let store;

beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  setCelsius.mockReset();
  setCelsius.mockReturnValue('return setCelsius action');
  setFahrenheit.mockReset();
  setFahrenheit.mockReturnValue('return setFahrenheit action');
});

describe('ConnectedCalculator', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedCalculator {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedCalculator {...props} />);
    const {
      celsius, fahrenheit,
      onCelsiusChange, onFahrenheitChange,
    } = wrapper.find(CalculatorComponent).props();
    expect(celsius).toBe(state.temperatures.celsius);
    expect(fahrenheit).toBe(state.temperatures.fahrenheit);
    expect(onCelsiusChange).toBeDefined();
    expect(typeof onCelsiusChange).toBe('function');
    expect(onFahrenheitChange).toBeDefined();
    expect(typeof onFahrenheitChange).toBe('function');
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<ConnectedCalculator {...props} />);
    const {
      onCelsiusChange, onFahrenheitChange,
    } = wrapper.find(CalculatorComponent).props();

    onCelsiusChange('123');
    expect(setCelsius).toHaveBeenCalledWith('123');
    expect(store.dispatch).toHaveBeenCalledWith('return setCelsius action');

    onFahrenheitChange('456');
    expect(setFahrenheit).toHaveBeenCalledWith('456');
    expect(store.dispatch).toHaveBeenCalledWith('return setFahrenheit action');
  });
});

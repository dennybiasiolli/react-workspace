import { SET_CELSIUS, SET_FAHRENHEIT } from '@/store/actionTypes';

const toCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = celsius => ((celsius * 9) / 5) + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};


const defaultState = {
  scale: 'c',
  celsius: '',
  fahrenheit: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CELSIUS:
      return {
        scale: 'c',
        celsius: action.temperature,
        fahrenheit: tryConvert(action.temperature, toFahrenheit),
      };
    case SET_FAHRENHEIT:
      return {
        scale: 'f',
        celsius: tryConvert(action.temperature, toCelsius),
        fahrenheit: action.temperature,
      };
    default:
      return state;
  }
};

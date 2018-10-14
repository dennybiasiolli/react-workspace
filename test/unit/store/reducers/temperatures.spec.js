import { SET_CELSIUS, SET_FAHRENHEIT } from '@/store/actionTypes';
import temperaturesReducer from '@/store/reducers/temperatures';


describe('temperatures', () => {
  test('should return default value', () => {
    expect(temperaturesReducer(undefined, {})).toEqual({
      celsius: '',
      fahrenheit: '',
    });
  });

  test('should work with SET_CELSIUS', () => {
    const initialState = {
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_CELSIUS,
      temperature: '100',
    })).toEqual({
      celsius: '100',
      fahrenheit: '212',
    });
  });

  test('should work with SET_FAHRENHEIT', () => {
    const initialState = {
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_FAHRENHEIT,
      temperature: '212',
    })).toEqual({
      celsius: '100',
      fahrenheit: '212',
    });
  });


  test('should work setting an invalid temperature', () => {
    const initialState = {
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_CELSIUS,
      temperature: 'abc',
    })).toEqual({
      celsius: 'abc',
      fahrenheit: '',
    });
  });
});

import { SET_CELSIUS, SET_FAHRENHEIT } from '@/store/actionTypes';
import temperaturesReducer from '@/store/reducers/temperatures';


describe('temperatures', () => {
  test('should return default value', () => {
    expect(temperaturesReducer(undefined, {})).toEqual({
      scale: 'c',
      celsius: '',
      fahrenheit: '',
    });
  });

  test('should work with SET_CELSIUS', () => {
    const initialState = {
      scale: 'aaa',
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_CELSIUS,
      temperature: '100',
    })).toEqual({
      scale: 'c',
      celsius: '100',
      fahrenheit: '212',
    });
  });

  test('should work with SET_FAHRENHEIT', () => {
    const initialState = {
      scale: 'aaa',
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_FAHRENHEIT,
      temperature: '212',
    })).toEqual({
      scale: 'f',
      celsius: '100',
      fahrenheit: '212',
    });
  });


  test('should work setting an invalid temperature', () => {
    const initialState = {
      scale: 'aaa',
      celsius: 'foo',
      fahrenheit: 'bar',
    };
    expect(temperaturesReducer(initialState, {
      type: SET_CELSIUS,
      temperature: 'abc',
    })).toEqual({
      scale: 'c',
      celsius: 'abc',
      fahrenheit: '',
    });
  });
});

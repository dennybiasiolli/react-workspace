import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '@/store/actionTypes';
import counterReducer from '@/store/reducers/counter';


describe('counter', () => {
  test('should return default value', () => {
    expect(counterReducer(undefined, {})).toBe(0);
  });

  test('should increment value', () => {
    expect(counterReducer(12, { type: INCREMENT_COUNTER })).toBe(13);
  });

  test('should decrement value', () => {
    expect(counterReducer(12, { type: DECREMENT_COUNTER })).toBe(11);
  });
});

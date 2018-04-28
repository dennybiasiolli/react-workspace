import { TOGGLE_FLAG } from '@/store/actionTypes';
import toggleReducer from '@/store/reducers/toggle';


describe('toggle', () => {
  test('should return default value', () => {
    expect(toggleReducer(undefined, {})).toEqual(false);
  });

  test('should work with TOGGLE_FLAG', () => {
    expect(toggleReducer(false, { type: TOGGLE_FLAG })).toBe(true);
    expect(toggleReducer(true, { type: TOGGLE_FLAG })).toBe(false);
    expect(toggleReducer(false, { type: TOGGLE_FLAG, flag: true })).toBe(true);
    expect(toggleReducer(true, { type: TOGGLE_FLAG, flag: true })).toBe(true);
    expect(toggleReducer(false, { type: TOGGLE_FLAG, flag: false })).toBe(false);
    expect(toggleReducer(true, { type: TOGGLE_FLAG, flag: false })).toBe(false);
  });
});

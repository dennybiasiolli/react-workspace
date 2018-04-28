import defaultStore, {
  actions,
  actionTypes,
  reducers,
  store,
} from '@/store';
import defaultActions from '@/store/actions';
import defaultActionTypes from '@/store/actionTypes';
import defaultReducers from '@/store/reducers';

describe('store', () => {
  test('should have all exports', () => {
    expect(defaultStore).toBeDefined();
    expect(actions).toBe(defaultActions);
    expect(actionTypes).toBe(defaultActionTypes);
    expect(reducers).toBe(defaultReducers);
    expect(store).toBeDefined();
  });
});

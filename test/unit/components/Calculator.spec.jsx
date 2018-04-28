import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Calculator from '@/components/Calculator';

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
});

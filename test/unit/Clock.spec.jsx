import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Clock from '@/Clock';

// mocking global Date object
const DATE_TO_USE = new Date(2018, 4, 15, 18, 50, 37);
const mockedDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = mockedDate.UTC;
global.Date.parse = mockedDate.parse;
global.Date.now = mockedDate.now;

describe('Clock', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<Clock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

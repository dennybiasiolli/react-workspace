import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Clock from '@/components/Clock';

// mocking global Date object
const DATE_TO_USE = new Date(2018, 4, 15, 18, 50, 37);
jest.spyOn(DATE_TO_USE, 'toLocaleTimeString').mockReturnValue('18:50:37');
const mockedDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = mockedDate.UTC;
global.Date.parse = mockedDate.parse;
global.Date.now = mockedDate.now;

jest.useFakeTimers();

describe('Clock', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<Clock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call setInterval when component mounts', () => {
    const wrapper = shallow(<Clock />);
    const instance = wrapper.instance();
    instance.tick = jest.fn();
    setInterval.mockReset();
    setInterval.mockReturnValue('fnSetInterval');
    instance.componentDidMount();
    expect(instance.timerID).toBe('fnSetInterval');
    expect(setInterval).toHaveBeenCalled();
    expect(instance.tick).not.toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    expect(instance.tick).toHaveBeenCalledWith();
  });

  test('should call clearInterval when component unmounts', () => {
    const wrapper = shallow(<Clock />);
    const instance = wrapper.instance();
    instance.tick = jest.fn();
    clearInterval.mockReset();
    instance.componentWillUnmount();
    expect(clearInterval).toHaveBeenCalledWith(instance.timerID);
  });

  test('tick should call setState with the date', () => {
    const wrapper = shallow(<Clock />);
    const instance = wrapper.instance();
    instance.setState = jest.fn();
    instance.tick();
    expect(instance.setState).toHaveBeenCalledWith({ date: DATE_TO_USE });
  });
});

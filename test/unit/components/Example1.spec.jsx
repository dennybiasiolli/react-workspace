import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Example1 from '@/components/Example1';

describe('Example1', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<Example1 />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have default state', () => {
    const wrapper = shallow(<Example1 />);
    const instance = wrapper.instance();
    expect(instance.state).toEqual({
      counter: 0,
    });
  });

  test('should call handleButtonClick clicking on button', () => {
    const wrapper = shallow(<Example1 />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleButtonClick');
    wrapper.find('button').at(0).simulate('click');
    expect(instance.handleButtonClick).toHaveBeenCalled();
  });

  test('should increment counter clicking on button', () => {
    const wrapper = shallow(<Example1 />);
    const instance = wrapper.instance();
    expect(instance.state.counter).toBe(0);
    wrapper.find('button').at(0).simulate('click');
    expect(instance.state.counter).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('handleButtonClick should call and return setState', () => {
    const wrapper = shallow(<Example1 />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'setState').mockReturnValue('retVal setState');
    const retVal = instance.handleButtonClick();
    expect(instance.setState).toHaveBeenCalledWith({
      counter: 1,
    });
    expect(retVal).toBe('retVal setState');
  });
});

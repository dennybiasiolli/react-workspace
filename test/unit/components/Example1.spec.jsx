import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Example1 from '@/components/Example1';

describe('Example1', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      counter: 0,
      onIncrementCounter: () => { },
    };
    const wrapper = shallow(<Example1 {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should match enzyme shallow snapshot when counter is 1', () => {
    const props = {
      counter: 1,
      onIncrementCounter: () => { },
    };
    const wrapper = shallow(<Example1 {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onIncrementCounter clicking on button', () => {
    const props = {
      counter: 1,
      onIncrementCounter: jest.fn(),
    };
    const wrapper = shallow(<Example1 {...props} />);
    wrapper.find('button').at(0).simulate('click');
    expect(props.onIncrementCounter).toHaveBeenCalledWith();
  });
});

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
      foo: 'bar',
    });
  });
});

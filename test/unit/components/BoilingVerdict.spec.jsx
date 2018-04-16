import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BoilingVerdict from '@/components/BoilingVerdict';

describe('BoilingVerdict', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<BoilingVerdict celsius={0} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({ celsius: 100 });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

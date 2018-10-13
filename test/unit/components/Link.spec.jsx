import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from '@/components/Link';

describe('Link', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      active: false,
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Link {...props}>Test 1</Link>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({
      active: true,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onClick clicking on link', () => {
    const props = {
      active: false,
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Link {...props}>Test 1</Link>);
    const clickEvent = {
      preventDefault: jest.fn(),
    };
    wrapper.find('button').simulate('click', clickEvent);
    expect(props.onClick).toHaveBeenCalledWith();
    expect(clickEvent.preventDefault).toHaveBeenCalledWith();
  });
});

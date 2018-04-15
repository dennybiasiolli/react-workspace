import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Toggle from '@/Toggle';

describe('Toggle', () => {
  test('should match react-test-renderer snapshot', () => {
    const component = renderer.create(<Toggle />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.find('button')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should match enzyme mount snapshot', () => {
    const wrapper = mount(<Toggle />);
    expect(wrapper.find('button')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

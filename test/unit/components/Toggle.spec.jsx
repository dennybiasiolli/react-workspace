import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Toggle from '@/components/Toggle';

describe('Toggle', () => {
  test('should match react-test-renderer snapshot', () => {
    const props = {
      isToggleOn: false,
      onToggle: jest.fn(() => {
        props.isToggleOn = !props.isToggleOn;
      }),
    };
    let component = renderer.create(<Toggle {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    expect(props.onToggle).toHaveBeenCalledWith();

    // re-rendering
    component = renderer.create(<Toggle {...props} />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    expect(props.onToggle).toHaveBeenCalledWith();
    // re-rendering
    component = renderer.create(<Toggle {...props} />);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match enzyme shallow snapshot', () => {
    const props = {
      isToggleOn: false,
      onToggle: jest.fn(() => {
        props.isToggleOn = !props.isToggleOn;
      }),
    };
    const wrapper = shallow(<Toggle {...props} />);
    expect(wrapper.find('button')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith();
    wrapper.setProps(props);
    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith();
    wrapper.setProps(props);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should match enzyme mount snapshot', () => {
    const props = {
      isToggleOn: false,
      onToggle: jest.fn(() => {
        props.isToggleOn = !props.isToggleOn;
      }),
    };
    const wrapper = mount(<Toggle {...props} />);
    expect(wrapper.find('button')).toHaveLength(3);

    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith();
    wrapper.setProps(props);
    expect(toJson(wrapper)).toMatchSnapshot();

    // manually trigger the toggle
    wrapper.find('button').at(0).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith();
    wrapper.setProps(props);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  test('should call onToggle props clicking on buttons', () => {
    const props = {
      isToggleOn: false,
      onToggle: jest.fn(),
    };
    const wrapper = shallow(<Toggle {...props} />);
    wrapper.find('button').at(0).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith();
    wrapper.find('button').at(1).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith(true);
    wrapper.find('button').at(2).simulate('click');
    expect(props.onToggle).toHaveBeenCalledWith(false);
  });
});

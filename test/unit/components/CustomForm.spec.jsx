import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CustomForm from '@/components/CustomForm';

describe('CustomForm', () => {
  test('should match enzyme shallow snapshot', () => {
    const wrapper = shallow(<CustomForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call handleSubmit when submitting form', () => {
    const wrapper = shallow(<CustomForm />);
    jest.spyOn(CustomForm, 'handleSubmit');
    window.alert = jest.fn();
    const e = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', e);
    expect(CustomForm.handleSubmit).toHaveBeenCalledWith(e);
    expect(window.alert).toHaveBeenCalledWith('The form was submitted');
    expect(e.preventDefault).toHaveBeenCalledWith();
  });

  test('should call handleChangeText when changing input01', () => {
    const wrapper = shallow(<CustomForm />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleChangeText');
    jest.spyOn(instance, 'setState');
    const e = { target: { value: 'new value' } };
    wrapper.find('input#input01').simulate('change', e);
    expect(instance.handleChangeText).toHaveBeenCalledWith(e);
    expect(instance.setState).toHaveBeenCalledWith({ textVal: 'new value' });
  });

  test('should call handleChangeTextarea when changing input02', () => {
    const wrapper = shallow(<CustomForm />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleChangeTextarea');
    jest.spyOn(instance, 'setState');
    const e = { target: { value: 'new value' } };
    wrapper.find('textarea#input02').simulate('change', e);
    expect(instance.handleChangeTextarea).toHaveBeenCalledWith(e);
    expect(instance.setState).toHaveBeenCalledWith({ textareaVal: 'new value' });
  });

  test('should call handleChangeSelect when changing input03', () => {
    const wrapper = shallow(<CustomForm />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleChangeSelect');
    jest.spyOn(instance, 'setState');
    const e = { target: { value: 'new value' } };
    wrapper.find('select#input03').simulate('change', e);
    expect(instance.handleChangeSelect).toHaveBeenCalledWith(e);
    expect(instance.setState).toHaveBeenCalledWith({ selectVal: 'new value' });
  });

  test('should call handleChangeSelectMultiple when changing input04', () => {
    const wrapper = shallow(<CustomForm />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleChangeSelectMultiple');
    jest.spyOn(instance, 'setState');
    const e = {
      target: {
        options: [
          { value: 'grapefruit', text: 'Grapefruit' },
          { value: 'lime', text: 'Lime', selected: true },
          { value: 'coconut', text: 'Coconut' },
          { value: 'mango', text: 'Mango' },
        ],
      },
    };
    wrapper.find('select#input04').simulate('change', e);
    expect(instance.handleChangeSelectMultiple).toHaveBeenCalledWith(e);
    expect(instance.setState).toHaveBeenCalledWith({
      selectMultipleVal: ['lime'],
    });
  });
});

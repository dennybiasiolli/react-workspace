import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PostList from '@/components/PostList';

describe('PostList', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      isFetching: false,
      posts: [],
      onFetchPosts: jest.fn(),
    };
    const wrapper = shallow(<PostList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({
      isFetching: true,
    });
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({
      isFetching: false,
      posts: [
        { id: 1, description: 'post 1' },
      ],
    });
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({
      isFetching: true,
    });
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.setProps({
      isFetching: false,
      posts: [],
      error: { description: 'fetching error' },
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('clicking on buttons should call onFetchPosts prop', () => {
    const props = {
      isFetching: false,
      posts: [],
      onFetchPosts: jest.fn(),
    };
    const wrapper = shallow(<PostList {...props} />);
    wrapper.find('button').at(0).simulate('click');
    expect(props.onFetchPosts).toHaveBeenCalledWith(true);
    props.onFetchPosts.mockReset();
    wrapper.find('button').at(1).simulate('click');
    expect(props.onFetchPosts).toHaveBeenCalledWith(false);
  });
});

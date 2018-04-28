import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PostListComponent from '@/components/PostList';
import PostList from '@/containers/PostList';
import { fetchPostsAsync } from '@/store/actions';

let returnFetchPostAsync;
jest.mock('@/store/actions', () => ({
  fetchPostsAsync: jest.fn(),
}));

const state = {
  posts: {
    isFetching: false,
    error: null,
    posts: [],
  },
};

let store;


beforeEach(() => {
  store = {
    getState: jest.fn().mockReturnValue(state),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  fetchPostsAsync.mockReset();
  returnFetchPostAsync = jest.fn();
  fetchPostsAsync.mockReturnValue(returnFetchPostAsync);
});

describe('PostList', () => {
  test('should match enzyme shallow snapshot', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<PostList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should have correct props mapped', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<PostList {...props} />);
    const {
      isFetching, error, posts, onFetchPosts,
    } = wrapper.find(PostListComponent).props();
    expect(isFetching).toBe(state.posts.isFetching);
    expect(error).toBe(state.posts.error);
    expect(posts).toBe(state.posts.posts);
    expect(onFetchPosts).toBeDefined();
    expect(typeof onFetchPosts).toBe('function');
  });

  test('should dispatch in the right way', () => {
    const props = {
      store,
    };
    const wrapper = shallow(<PostList {...props} />);
    const {
      onFetchPosts,
    } = wrapper.find(PostListComponent).props();

    onFetchPosts('params');
    expect(fetchPostsAsync).toHaveBeenCalledWith('params');
    expect(store.dispatch).not.toHaveBeenCalled();
    expect(returnFetchPostAsync).toHaveBeenCalledWith(store.dispatch);
  });
});

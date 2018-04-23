import React from 'react';
import PropTypes from 'prop-types';

const PostList = props => (
  <div>
    {props.isFetching && <p>Fetching...</p>}
    {!props.isFetching && props.error && <p>Error: {props.error.description}</p>}
    <ul>
      {
        props.posts.map(post =>
          <li key={post.id}>{post.description}</li>)
      }
    </ul>
    <button onClick={() => props.onFetchPosts(true)}>Fetch Posts OK</button>
    <button onClick={() => props.onFetchPosts(false)}>Fetch Posts Errors</button>
  </div>
);

PostList.defaultProps = {
  error: null,
};

PostList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFetchPosts: PropTypes.func.isRequired,
};

export default PostList;

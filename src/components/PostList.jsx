import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({
  isFetching,
  error,
  posts,
  onFetchPosts,
}) => (
  <div>
    {isFetching && <p>Fetching...</p>}
    {!isFetching && error && (
      <p>
        Error:
        {error.description}
      </p>
    )}
    <ul>
      {
        posts.map(post => <li key={post.id}>{post.description}</li>)
      }
    </ul>
    <button type="button" onClick={() => onFetchPosts(true)}>Fetch Posts OK</button>
    <button type="button" onClick={() => onFetchPosts(false)}>Fetch Posts Errors</button>
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

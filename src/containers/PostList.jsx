import { connect } from 'react-redux';

import PostListComponent from '@/components/PostList';
import { fetchPostsAsync } from '@/store/actions';

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: params => fetchPostsAsync(params)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListComponent);

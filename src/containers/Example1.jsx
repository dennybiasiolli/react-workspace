import { connect } from 'react-redux';

import Example1 from '@/components/Example1';
import { incrementCounter } from '@/store/actions';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(incrementCounter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example1);

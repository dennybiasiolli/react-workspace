import { connect } from 'react-redux';

import ToggleComponent from '@/components/Toggle';
import { toggleFlag } from '@/store/actions';

const mapStateToProps = state => ({
  isToggleOn: state.toggle,
});

const mapDispatchToProps = dispatch => ({
  onToggle: flag => dispatch(toggleFlag(flag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleComponent);

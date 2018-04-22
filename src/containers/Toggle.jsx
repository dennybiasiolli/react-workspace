import { connect } from 'react-redux';

import ToggleComponent from '@/components/Toggle';
import { toggleFlag } from '@/store/actions';

const mapStateToProps = state => ({
  isToggleOn: state.toggle,
});

const mapDispatchToProps = dispatch => ({
  onToggle: flag => dispatch(toggleFlag(flag)),
});

const Toggle = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleComponent);

export default Toggle;

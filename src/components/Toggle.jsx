import React from 'react';
import PropTypes from 'prop-types';

const Toggle = props => (
  <div>
    <p>Is toggled {props.isToggleOn ? 'ON' : 'OFF'}</p>
    <button onClick={() => props.onToggle()}>Toggle</button>
    <button onClick={() => props.onToggle(true)}>Toggle ON</button>
    <button onClick={() => props.onToggle(false)}>Toggle OFF</button>
  </div>
);

Toggle.propTypes = {
  isToggleOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;

import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ isToggleOn, onToggle }) => (
  <div>
    <p>
      Is toggled
      {isToggleOn ? 'ON' : 'OFF'}
    </p>
    <button type="button" onClick={() => onToggle()}>Toggle</button>
    <button type="button" onClick={() => onToggle(true)}>Toggle ON</button>
    <button type="button" onClick={() => onToggle(false)}>Toggle OFF</button>
  </div>
);

Toggle.propTypes = {
  isToggleOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;

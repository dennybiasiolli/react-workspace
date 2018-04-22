import React from 'react';
import PropTypes from 'prop-types';

import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const Calculator = props => (
  <div>
    <TemperatureInput
      scale="c"
      temperature={props.celsius}
      onTemperatureChange={temperature => props.onCelsiusChange(temperature)}
    />

    <TemperatureInput
      scale="f"
      temperature={props.fahrenheit}
      onTemperatureChange={temperature => props.onFahrenheitChange(temperature)}
    />

    <BoilingVerdict
      celsius={parseFloat(props.celsius || 0)}
    />

  </div>
);

Calculator.propTypes = {
  celsius: PropTypes.string.isRequired,
  fahrenheit: PropTypes.string.isRequired,
  onCelsiusChange: PropTypes.func.isRequired,
  onFahrenheitChange: PropTypes.func.isRequired,
};

export default Calculator;

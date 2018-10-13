import React from 'react';
import PropTypes from 'prop-types';

import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const Calculator = ({
  celsius,
  fahrenheit,
  onCelsiusChange,
  onFahrenheitChange,
}) => (
  <div>
    <TemperatureInput
      scale="c"
      temperature={celsius}
      onTemperatureChange={temperature => onCelsiusChange(temperature)}
    />

    <TemperatureInput
      scale="f"
      temperature={fahrenheit}
      onTemperatureChange={temperature => onFahrenheitChange(temperature)}
    />

    <BoilingVerdict
      celsius={parseFloat(celsius || 0) || 0}
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

import React from 'react';

import TemperatureInput from '@/TemperatureInput';
import BoilingVerdict from '@/BoilingVerdict';

const toCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

const toFahrenheit = celsius => ((celsius * 9) / 5) + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temp => this.handleCelsiusChange(temp)}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temp => this.handleFahrenheitChange(temp)}
        />

        <BoilingVerdict
          celsius={parseFloat(celsius || 0)}
        />

      </div>
    );
  }
}

export default Calculator;

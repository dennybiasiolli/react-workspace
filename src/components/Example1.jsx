import PropTypes from 'prop-types';
import React from 'react';

const Example1 = ({
  counter,
  onIncrementCounter,
}) => (
  <div>
    Clicked&nbsp;
    {counter}
    &nbsp;time
    {counter !== 1 ? 's' : ''}
    <br />
    <button type="button" onClick={() => onIncrementCounter()}>
      Click me
    </button>
  </div>
);

Example1.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
};

export default Example1;

import React from 'react';
import PropTypes from 'prop-types';

const FunctionalComponent = props => (
  <h3>{props.name}</h3>
);

FunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FunctionalComponent;

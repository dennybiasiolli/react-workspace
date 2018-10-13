import React from 'react';
import PropTypes from 'prop-types';

const FunctionalComponent = ({ name }) => (
  <h3>{name}</h3>
);

FunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FunctionalComponent;

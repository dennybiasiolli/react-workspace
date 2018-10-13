import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: true,
    };
  }

  render() {
    const { test } = this.state;
    const { name } = this.props;
    return test && <h3>{name}</h3>;
  }
}

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;

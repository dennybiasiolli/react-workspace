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
    return this.state.test && <h3>{this.props.name}</h3>;
  }
}

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;

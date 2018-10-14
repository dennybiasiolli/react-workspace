import React from 'react';

class Example1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleButtonClick() {
    const { counter } = this.state;
    return this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        Clicked&nbsp;
        {counter}
        &nbsp;time
        {counter !== 1 ? 's' : ''}
        <br />
        <button type="button" onClick={() => this.handleButtonClick()}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example1;

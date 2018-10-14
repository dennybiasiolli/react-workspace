import React from 'react';

class Example1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: 'bar',
    };
  }

  render() {
    const { foo } = this.state;
    return (
      <div>
        {foo}
      </div>
    );
  }
}

export default Example1;

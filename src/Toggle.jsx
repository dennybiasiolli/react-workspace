class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  handleToggle(e, toggleValue) {
    this.setState(prevState => ({
      isToggleOn: toggleValue !== undefined ? toggleValue : !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <p>Is toggled {this.state.isToggleOn ? 'ON' : 'OFF'}</p>
        <button onClick={(e) => this.handleToggle(e)}>Toggle</button>
        <button onClick={(e) => this.handleToggle(e, true)}>Toggle ON</button>
        <button onClick={(e) => this.handleToggle(e, false)}>Toggle OFF</button>
      </div>
    );
  }
}

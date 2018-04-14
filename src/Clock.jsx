class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h3>TimerComponent</h3>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

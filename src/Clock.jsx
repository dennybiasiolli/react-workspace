class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // setting up the timer when component is rendered to DOM for the first time
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // clearing the timer when component is removed from the DOM
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
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

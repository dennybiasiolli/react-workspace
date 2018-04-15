import React from 'react';

class CustomForm extends React.Component {
  static handleSubmit(e) {
    alert('The form was submitted'); // eslint-disable-line no-alert
    e.preventDefault();
  }

  constructor(props) {
    super(props);

    this.selectable = [
      { value: 'grapefruit', text: 'Grapefruit' },
      { value: 'lime', text: 'Lime' },
      { value: 'coconut', text: 'Coconut' },
      { value: 'mango', text: 'Mango' },
    ];

    this.state = {
      textVal: '',
      textareaVal: '',
      selectVal: '',
      selectMultipleVal: [],
    };
  }

  handleChangeText(e) {
    this.setState({ textVal: e.target.value });
  }

  handleChangeTextarea(e) {
    this.setState({ textareaVal: e.target.value });
  }

  handleChangeSelect(e) {
    this.setState({ selectVal: e.target.value });
  }

  handleChangeSelectMultiple(e) {
    const selectedOptions = [...e.target.options]
      .filter(o => o.selected)
      .map(o => o.value);
    this.setState({ selectMultipleVal: selectedOptions });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <p>
          <label htmlFor="input01">
            Text:
            <input
              id="input01"
              type="text"
              value={this.state.textVal}
              onChange={e => this.handleChangeText(e)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="input02">
            Textarea:
            <textarea
              id="input02"
              value={this.state.textareaVal}
              onChange={e => this.handleChangeTextarea(e)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="input03">
            Pick your favorite La Croix flavor:
            <select
              id="input03"
              value={this.state.selectVal}
              onChange={e => this.handleChangeSelect(e)}
            >
              {
                this.selectable.map(e =>
                  <option key={e.value} value={e.value}>{e.text}</option>)
              }
            </select>
          </label>
        </p>
        <p>
          <label htmlFor="input04">
            Pick your favorite La Croix flavors:
            <select
              id="input04"
              multiple
              value={this.state.selectMultipleVal}
              onChange={e => this.handleChangeSelectMultiple(e)}
            >
              {
                this.selectable.map(e =>
                  <option key={e.value} value={e.value}>{e.text}</option>)
              }
            </select>
          </label>
          {this.state.selectMultipleVal}
        </p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CustomForm;

import React from 'react';

class CustomForm extends React.Component {
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

  handleSubmit(e) {
    alert('The form was submitted');
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <p>
          <label>
            Text:
            <input type="text" value={this.state.textVal} onChange={e => this.handleChangeText(e)} />
          </label>
        </p>
        <p>
          <label>
            Textarea:
            <textarea value={this.state.textareaVal} onChange={e => this.handleChangeTextarea(e)} />
          </label>
        </p>
        <p>
          <label>
            Pick your favorite La Croix flavor:
            <select value={this.state.selectVal} onChange={e => this.handleChangeSelect(e)}>
              {
                this.selectable.map(e =>
                  <option key={e.value} value={e.value}>{e.text}</option>)
              }
            </select>
          </label>
        </p>
        <p>
          <label>
            Pick your favorite La Croix flavors:
            <select multiple value={this.state.selectMultipleVal} onChange={e => this.handleChangeSelectMultiple(e)}>
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

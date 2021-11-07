import React from 'react';
import './GuGuDan.css';

/**
 * React Component of GuGuDan (Times Table) Game
 */
export default class GuGuDan extends React.Component {
  /**
   * Initialize GuGuDan Components
   *
   * @param {*} props properties of the Component
   */
  constructor(props) {
    super(props);

    // Setup states
    this.state = {
      firstNum: Math.ceil(Math.random() * 9),
      secondNum: Math.ceil(Math.random() * 9),
      inputValue: '',
      result: '',
    };

    // Bind functions
    this.inputValueChange = this.inputValueChange.bind(this);
    this.resultSubmit = this.resultSubmit.bind(this);
  }

  /**
   * EventHandler of input's change event
   *
   * @param {Event} changeEvent when input value changes, event fired
   */
  inputValueChange(changeEvent) {
    console.log();
    this.setState({ inputValue: changeEvent.target.value });
  }

  /**
   * EventHandler of form's submit event
   * @param {Event} submitEvent when form submitted, event fired
   */
  resultSubmit(submitEvent) {
    submitEvent.preventDefault();

    // GuGuDan logic
    if (
      parseInt(this.state.inputValue) ===
      this.state.firstNum * this.state.secondNum
    ) {
      // When correct
      this.setState({
        result: 'Correct',
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
        inputValue: '',
      });
    } else {
      // When wrong
      this.setState({
        result: 'Incorrect',
        inputValue: '',
      });
    }
  }

  /**
   * Render the component
   *
   * @return {React.ReactElement} React Element
   */
  render() {
    return (
      <>
        <div>
          {this.state.firstNum} x {this.state.secondNum}
        </div>
        <form onSubmit={this.resultSubmit}>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={this.inputValueChange}
          />
          <button>Reply</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

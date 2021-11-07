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
    this.submitResult = this.submitResult.bind(this);
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
   * EventHandler of input's keydown event
   *
   * @param {Event} keyboardEvent when keyboard pressed, event fired
   */
  submitResult(keyboardEvent) {
    // When enter pressed, submit the result
    if (keyboardEvent.key === 'Enter') {
      keyboardEvent.preventDefault();

      // GuGuDan logic
      const multiplication = this.state.firstNum * this.state.secondNum;
      if (parseInt(this.state.inputValue) === multiplication) {
        // When correct
        this.setState({
          result: `Correct: ${this.state.firstNum} × ${this.state.secondNum} = ${multiplication}`,
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          inputValue: '',
        });
      } else {
        // When wrong
        this.setState({
          result: `Incorrect: ${this.state.firstNum} × ${this.state.secondNum} = ${multiplication}`,
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          inputValue: '',
        });
      }
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
        <h3>Press Enter to Submit</h3>
        <div>
          <span>
            {this.state.firstNum} × {this.state.secondNum} ={' '}
            <input
              type="number"
              value={this.state.inputValue}
              onChange={this.inputValueChange}
              onKeyDown={this.submitResult}
            />
          </span>
        </div>
        <div>{this.state.result}</div>
      </>
    );
  }
}

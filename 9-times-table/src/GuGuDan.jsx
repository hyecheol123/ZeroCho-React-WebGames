import React from 'react';
import './font/WalterTurncoat.css';
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
      // Result and Equation will be combined to generate result display
      result: 'previous result',
      equation: 'will show here!!',
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

      // Check for user's input
      const userInput = parseInt(this.state.inputValue);
      if (isNaN(userInput)) {
        // When the input is not a number (or empty)
        // Do nothing
        return;
      } else {
        // GuGuDan logic
        const multiplication = this.state.firstNum * this.state.secondNum;
        if (parseInt(this.state.inputValue) === multiplication) {
          // When correct
          this.setState({
            result: 'Correct!!',
            equation: `${this.state.firstNum} × ${this.state.secondNum} = ${userInput}`,
            firstNum: Math.ceil(Math.random() * 9),
            secondNum: Math.ceil(Math.random() * 9),
            inputValue: '',
          });
        } else {
          // When wrong
          this.setState({
            result: 'Incorrect!!',
            equation: `${this.state.firstNum} × ${this.state.secondNum} ≠ ${userInput}`,
            firstNum: Math.ceil(Math.random() * 9),
            secondNum: Math.ceil(Math.random() * 9),
            inputValue: '',
          });
        }
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
        <h3>
          <span className="avoid-wrap">Press Enter&nbsp;</span>
          <span className="avoid-wrap">To Submit</span>
        </h3>
        <div id="content-wrapper">
          <div id="question">
            {`${this.state.firstNum} × ${this.state.secondNum} =`}&nbsp;
            <input
              type="number"
              value={this.state.inputValue}
              id="answer"
              onChange={this.inputValueChange}
              onKeyDown={this.submitResult}
              required
              min="0"
            />
          </div>
          <div id="result">
            <span className="avoid-wrap">{this.state.result}&nbsp;</span>
            <br />
            <span className="avoid-wrap">{this.state.equation}</span>
          </div>
        </div>
      </>
    );
  }
}

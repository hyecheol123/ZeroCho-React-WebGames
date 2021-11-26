import React from 'react';

/**
 * React Component for UserChoiceButton
 *
 * Get three props
 *   - buttonDisabled {boolean} Indicates whether buttons should be abled or not.
 *       Button is disabled when it showing result of previous game.
 *   - result {string} Result of previous game.
 *   - onButtonClick {function} Callback function to handle button's click event.
 *       Need user's choice as an argument.
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
class UserChoiceButton extends React.PureComponent {
  /**
   * Render Component
   *
   * @return {React.ReactElement} React Element representing UserChoiceButton
   */
  render() {
    return (
      <>
        {this.props.buttonDisabled ? (
          <div>{this.props.result}</div>
        ) : (
          <div>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('rock')}
            >
              Rock
            </button>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('paper')}
            >
              Paper
            </button>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('scissors')}
            >
              Scissors
            </button>
          </div>
        )}
      </>
    );
  }
}

export default UserChoiceButton;

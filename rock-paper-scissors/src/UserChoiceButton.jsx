import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
} from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/UserChoiceButton.module.css';

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
          <div className={styles.Wrapper}>
            <div className={styles.Result}>{this.props.result}</div>
          </div>
        ) : (
          <div className={styles.Wrapper}>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('rock')}
              className={`${styles.BtnClass} ${styles.Rock}`}
            >
              <FontAwesomeIcon icon={faHandRock} />
            </button>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('paper')}
              className={`${styles.BtnClass} ${styles.Paper}`}
            >
              <FontAwesomeIcon icon={faHandPaper} />
            </button>
            <button
              disabled={this.props.buttonDisabled}
              onClick={this.props.onButtonClick('scissors')}
              className={`${styles.BtnClass} ${styles.Scissors}`}
            >
              <FontAwesomeIcon icon={faHandScissors} />
            </button>
          </div>
        )}
      </>
    );
  }
}

export default UserChoiceButton;

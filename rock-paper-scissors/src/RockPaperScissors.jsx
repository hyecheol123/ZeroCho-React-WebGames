import React from 'react';
import RockImg from '../assets/Rock.svg';
import PaperImg from '../assets/Paper.svg';
import ScissorsImg from '../assets/Scissors.svg';
import ComputerChoiceImage from './ComputerChoiceImage';
import UserChoiceButton from './UserChoiceButton';
import styles from '../styles/RockPaperScissors.module.css';
import '../styles/global.css';

/**
 * Helper method to detect computer's choice
 *
 * @param {string} imgUrl imgeUrl of current computer's choice
 * @return {string} Computer's choice among rock, paper, and scissors.
 */
const computerChoice = (imgUrl) => {
  switch (imgUrl) {
    case RockImg:
      return 'rock';
    case PaperImg:
      return 'paper';
    case ScissorsImg:
      return 'scissors';
    default:
      console.log('Error');
  }
};

// Value for each available option of Rock Paper Scissors
const rpsValue = {
  rock: -1,
  paper: 0,
  scissors: 1,
};

/**
 * React Component of RockPaperScissors
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
class RockPaperScissors extends React.PureComponent {
  /**
   * Initialize RockPaperScissors Component
   *
   * @param {object} props Properties that passed from the parent Component.
   */
  constructor(props) {
    super(props);

    // States in the React.Component
    this.state = {
      buttonDisabled: false,
      result: '',
      score: 0,
    };

    // Refs pointing other Elements
    this.computerChoiceImageElem = React.createRef();

    // Bind function
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  /**
   * EventHandler function
   *   to find out winner of the game and calcualte the score.
   *
   * @param {string} choice user's choice among rock, paper, and scissors.
   * @return {function} function to find the winner of the game
   *   and calculate the score based on the user's choice.
   */
  onButtonClick(choice) {
    return () => {
      // Stop chaning computer's choice
      clearInterval(this.computerChoiceImageElem.current.interval);
      // Disable buttons
      this.setState({ buttonDisabled: true });

      // Find winner and Calculate score
      const myValue = rpsValue[choice];
      const computerValue =
        rpsValue[
        computerChoice(this.computerChoiceImageElem.current.state.imgUrl)
        ];
      const diff = myValue - computerValue;
      if (diff === 0) {
        this.setState({
          result: 'Draw!!',
        });
      } else if ([-1, 2].includes(diff)) {
        this.setState((prevState) => {
          return {
            result: 'Lose!!',
            score: prevState.score - 1,
          };
        });
      } else {
        // diff is -2 or 1
        this.setState((prevState) => {
          return {
            result: 'Win!!',
            score: prevState.score + 1,
          };
        });
      }

      // Restart changing computer's choice after 1 second
      setTimeout(() => {
        this.computerChoiceImageElem.current.interval = setInterval(
          this.computerChoiceImageElem.current.changeHand,
          100
        );
        // Enable buttons
        this.setState({ buttonDisabled: false });
      }, 2000);
    };
  }

  /**
   * Render Component
   *
   * @return {React.ReactElement} React Element representing RockPaperScissors
   */
  render() {
    return (
      <div class={styles.Wrapper}>
        <ComputerChoiceImage ref={this.computerChoiceImageElem} />
        <UserChoiceButton
          buttonDisabled={this.state.buttonDisabled}
          result={this.state.result}
          onButtonClick={this.onButtonClick}
        />
        <div class={styles.Score}>{`Score: ${this.state.score}`}</div>
      </div>
    );
  }
}

export default RockPaperScissors;

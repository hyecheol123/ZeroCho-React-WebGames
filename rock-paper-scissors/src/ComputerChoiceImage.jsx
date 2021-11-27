import React from 'react';
import RockImg from '../assets/Rock.svg';
import PaperImg from '../assets/Paper.svg';
import ScissorsImg from '../assets/Scissors.svg';
import styles from '../styles/ComputerChoiceImage.module.css';

/**
 * React Component of ComputerChoiceImage
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
class ComputerChoiceImage extends React.PureComponent {
  /**
   * Initialize ComputerChoiceImage Component
   *
   * @param {object} props Properties that passed from the parent Component.
   */
  constructor(props) {
    super(props);

    // States in the React.Component
    this.state = {
      imgUrl: RockImg,
    };

    // Class variable to store interval which switches computer's choice
    this.interval = null;

    // Bind function
    this.changeHand = this.changeHand.bind(this);
  }

  /**
   * Helper method to randomly change computer's choice
   */
  changeHand() {
    const rndIdx = Math.floor(Math.random() * 2);
    if (this.state.imgUrl === RockImg) {
      if (rndIdx === 0) {
        this.setState({ imgUrl: PaperImg });
      } else {
        this.setState({ imgUrl: ScissorsImg });
      }
    } else if (this.state.imgUrl === PaperImg) {
      if (rndIdx === 0) {
        this.setState({ imgUrl: ScissorsImg });
      } else {
        this.setState({ imgUrl: RockImg });
      }
    } else {
      if (rndIdx === 0) {
        this.setState({ imgUrl: RockImg });
      } else {
        this.setState({ imgUrl: PaperImg });
      }
    }
  }

  /**
   * After Component first rendered, Usually call async operations
   *
   * Start switching computer's options and images
   */
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  /**
   * Before Component remove, Usually clean up async operations
   *
   * Clear the interval set previously
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * Render Component
   *
   * @return {React.ReactElement} React Element representing ComputerChoiceImage
   */
  render() {
    return (
      <div className={styles.ImageWrapper}>
        <img src={this.state.imgUrl} alt="Rock Paper Scissors"></img>
      </div>
    );
  }
}

export default ComputerChoiceImage;

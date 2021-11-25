import React from 'react';
import RockImg from '../assets/Rock.svg';
import PaperImg from '../assets/Paper.svg';
import ScissorsImg from '../assets/Scissors.svg';

class RockPaperScissors extends React.Component {
  static scores = {
    rock: -1,
    scissors: 0,
    paper: 1,
  };

  state = {
    result: '',
    imgUrl: RockImg,
    score: 0,
  };

  interval;

  // After Component first rendered, Usually call async operations
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.imgUrl === RockImg) {
        this.setState({
          imgUrl: PaperImg,
        });
      } else if (this.state.imgUrl === PaperImg) {
        this.setState({
          imgUrl: ScissorsImg,
        });
      } else {
        this.setState({
          imgUrl: RockImg,
        });
      }
    }, 1000);
  }

  // After re-render
  componentDidUpdate() {}

  // Before Component remove, Usually clean up async operations
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div>
          <img src={this.state.imgUrl} alt="Rock Paper Scissors"></img>
        </div>
        <div>
          <button>Rock</button>
          <button>Paper</button>
          <button>Scissors</button>
        </div>
      </>
    );
  }
}

export default RockPaperScissors;

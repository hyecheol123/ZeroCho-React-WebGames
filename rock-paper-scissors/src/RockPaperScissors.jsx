import React from 'react';
import backgroundImg from '../assets/Rock-Paper-Scissors-Gesture.png';

class RockPaperScissors extends React.Component {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  };

  // After Component first rendered, Usually call async operations
  componentDidMount() {}

  // After re-render
  componentDidUpdate() {}

  // Before Component remove, Usually clean up async operations
  componentWillUnmount() {}

  render() {
    return (
      <>
        <div style={{ background: `url(${backgroundImg})` }}></div>
      </>
    );
  }
}

export default RockPaperScissors;

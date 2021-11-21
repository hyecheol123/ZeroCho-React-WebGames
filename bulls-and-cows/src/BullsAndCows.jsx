import React from 'react';
import Greeting from './Greeting';
import Form from './Form';
import TrialsInfo from './TrialsInfo';
import NewGameButton from './NewGameButton';

/**
 * Helper method to choose four different random numbers
 *
 * @return {array<number>} Array contains four random numbers
 */
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Use 1 ~ 9
  const array = []; // Contain result

  // Choose four different random number
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line prettier/prettier
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    array.push(chosen);
  }

  return array;
}

/**
 * React Hooks Component for BullsAndCows game
 *
 * @return {React.ReactElement} a react element referring BullsAndCows
 */
const BullsAndCows = () => {
  // State
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => getNumbers());
  const [tries, setTries] = React.useState([]);
  const [msg, setMsg] = React.useState('');

  /**
   * Helper method of EventHandler handling submit event of the Form Component
   *
   * @param {string} value Input value of the Form
   */
  const onFormSubmit = React.useCallback(
    (value) => {
      // Check for answer
      if (value === answer.join('')) {
        // Correct Answer
        setMsg('Homerun!!');
        setTries((prevTries) => {
          return [...prevTries, { try: value, result: 'Homerun!!' }];
        });
        // Disable Form
        setIsDisabled(true);
      } else {
        // Wrong Answer
        // Retrieve numbers from user's input
        const userInputArray = value.split('').map((v) => parseInt(v));
        // Temporal storage to count strikes and balls
        let strike = 0;
        let ball = 0;

        // Count Strikes and Balls
        for (let i = 0; i < 4; i++) {
          if (userInputArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(userInputArray[i])) {
            ball += 1;
          }
        }
        // Add trial
        setTries((prevTries) => {
          return [...prevTries, { try: value, result: `${strike}S ${ball}B` }];
        });

        if (tries.length >= 9) {
          // 10th trial
          setMsg(`Out of change! Correct answer is ${answer.join('')}`);
          // Disable Form
          setIsDisabled(true);
        }
      }
    },
    [answer, tries]
  );

  /**
   * Helper method to start a new game
   */
  const newGame = React.useCallback(() => {
    setIsDisabled(false);
    setAnswer(getNumbers());
    setTries([]);
    setMsg('');
  });

  return (
    // TODO: Design
    <>
      <Greeting />
      <Form onSubmitFunc={onFormSubmit} isDisabled={isDisabled} msg={msg} />
      <TrialsInfo tries={tries} />
      <NewGameButton newGameFunc={newGame} />
    </>
  );
};

export default React.memo(BullsAndCows);

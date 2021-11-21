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
      // Wrong Answer
      // Retrieve numbers from user's input
      const userInputArray = value.split('').map((v) => parseInt(v));
      // Temporal storage to count bulls and cows
      let bulls = 0;
      let cows = 0;

      // Count Bulls and Cows
      for (let i = 0; i < 4; i++) {
        if (userInputArray[i] === answer[i]) {
          bulls += 1;
        } else if (answer.includes(userInputArray[i])) {
          cows += 1;
        }
      }
      // Add trial
      setTries((prevTries) => {
        return [
          ...prevTries,
          { try: value, result: `${bulls} Bulls ${cows} Cows` },
        ];
      });

      // Message
      if (bulls === 4) {
        // User Win
        setMsg('Correct!! You Win!!');
      } else if (tries.length >= 9) {
        // 10th trial
        setMsg(`Game Over! Correct answer is ${answer.join('')}`);
      }
    },
    [answer, tries]
  );

  /**
   * Helper method to start a new game
   */
  const newGame = React.useCallback(() => {
    setAnswer(getNumbers());
    setTries([]);
    setMsg('');
  }, []);

  return (
    // TODO: Design
    <>
      <Greeting />
      <Form onSubmitFunc={onFormSubmit} msg={msg} />
      <TrialsInfo tries={tries} />
      <NewGameButton newGameFunc={newGame} />
    </>
  );
};

export default React.memo(BullsAndCows);

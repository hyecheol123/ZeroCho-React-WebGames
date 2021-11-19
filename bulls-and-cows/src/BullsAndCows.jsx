import react from 'react';
import Trial from './Trial';

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
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    array.push(chosen);
  }

  return array;
}

/**
 * React Hooks Component for BullsAndCows game
 *
 * @return {react.ReactElement} a react element referring BullsAndCows
 */
const BullsAndCows = () => {
  // State
  const [result, setResult] = react.useState('');
  const [value, setValue] = react.useState('');
  const [answer, setAnswer] = react.useState(getNumbers());
  const [tries, setTries] = react.useState([]);

  /**
   * EventHandler function to handle submit event of the form
   *
   * @param {SubmitEvent} submitEvent HTML SubmitEvent from a from.
   */
  const onFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    // Check for answer
    if (value === answer.join('')) {
      // Correct Answer
      setResult('Homerun!!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: 'Homerun!!' }];
      });

      // Restart Game
      alert('Start New Game');
      setResult('');
      setAnswer(getNumbers());
      setTries([]);
      setValue('');
    } else {
      // Wrong Answer
      // Retrieve numbers from user's input
      const userInputArray = value.split('').map((v) => parseInt(v));
      // Temporal storage to count strikes and balls
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        // 10th trial
        setResult(`Out of change! Correct answer is ${answer.join('')}`);

        // Restart Game
        alert('Start New Game');
        setResult('');
        setAnswer(getNumbers());
        setTries([]);
        setValue('');
      } else {
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
        setValue('');
      }
    }
  };

  /**
   * EventHandler function to handle chaning values of input
   *
   * @param {Event} event an HTML event generated when input's value changed
   */
  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onFormSubmit}>
        <input maxLength={4} value={value} onChange={onInputChange} />
      </form>
      <div>Tries: {tries.length}</div>
      <ul>
        {tries.map((trial, index) => (
          <Trial key={`${index} Trial`} trialInfo={trial} />
        ))}
      </ul>
    </>
  );
};

export default BullsAndCows;

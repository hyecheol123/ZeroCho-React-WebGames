import react from 'react';
import Trial from './Trial';

/**
 * Choose four different random numbers
 */
function getNumbers() {
  // TODO
}

/**
 * React Hooks Component for BullsAndCows game
 *
 * @return {react.ReactElement} a react element referring BullsAndCows
 */
const BullsAndCows = () => {
  // State
  const [result, setResult] = react.useState();
  const [value, setValue] = react.useState();
  const [answer, setAnswer] = react.useState(getNumbers());
  const [tries, setTries] = react.useState([]);

  // EventHandler
  const onFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    // TODO
  };

  const onInputChange = () => {
    // TODO
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onFormSubmit}>
        <input maxLength={4} value={value} onChange={onInputChange} />
      </form>
      <div>Tries: {tries.length}</div>
      <ul>
        {tries.map((trial) => (
          <Trial trial={trial} />
        ))}
      </ul>
    </>
  );
};

export default BullsAndCows;

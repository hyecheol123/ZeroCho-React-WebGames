import React from 'react';
import { TableContext } from './MineSweeperData';

const Timer = () => {
  const test = (sec) => {
    console.log(`${sec} timer`);
  };

  // State
  const [timer, setTimer] = React.useState(0);

  // Context
  const { halted } = React.useContext(TableContext);

  React.useEffect(() => {
    let interval;
    // When game is on-going, count time
    if (halted === false) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    // Clear interval when MineSweeper unmounts
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [halted]);

  return (
    <>
      {test(timer)}
      <span>Timer: {timer} sec</span>
    </>
  );
};

export default React.memo(Timer);

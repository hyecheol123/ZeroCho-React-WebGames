import React from 'react';

/**
 * React Hooks Component for ResponseTime game
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {Array<number>} props.result containing previous results (response time)
 * @param {function} props.openModalFunc Function to open modals
 * @param {function} props.addResultFunc Function to add result to array
 * @return {React.ReactElement} a react element referring ResponseTime
 */
const ResponseTime = ({ result, openModalFunc, addResultFunc }) => {
  // States
  const [readyState, setReadyState] = React.useState('idle'); // idle/ready/go
  const [msg, setMsg] = React.useState('Click Anywere to Start');
  // Refs that used as local variables
  const timeout = React.useRef(null);
  const startTime = React.useRef(null);
  const endTime = React.useRef(null);

  /**
   * Method to interact with users. Playing games.
   */
  const onClickScreen = React.useCallback(() => {
    if (readyState === 'idle') {
      // Start new game
      timeout.current = setTimeout(() => {
        // After 2 ~ 5 seconds, game starts
        setReadyState('go');
        setMsg('Click Now!!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 3000) + 2000);

      // Get ready
      setReadyState('ready');
      setMsg('Click when screen becomes green.');
    } else if (readyState === 'ready') {
      // Click too fast
      clearTimeout(timeout.current);
      setReadyState('idle');
      setMsg('Click Anywere to Start');
      // Display alert modal
      openModalFunc();
    } else if (readyState === 'go') {
      // Check user's response time
      endTime.current = new Date();
      setReadyState('idle');
      setMsg('Click Anywere to Start');
      addResultFunc(endTime.current - startTime.current);
    }
  }, [readyState, addResultFunc]);

  return (
    <div onClick={onClickScreen}>
      <span>{msg}</span>
      <span>
        {result.length !== 0 &&
          `${Math.round(result.reduce((s, c) => s + c) / result.length)}ms`}
      </span>
    </div>
  );
};

export default React.memo(ResponseTime);

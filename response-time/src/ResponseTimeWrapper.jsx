import React from 'react';
import ResponseTime from './ResponseTime';
import FoulModal from './FoulModal';
import ResetButton from './ResetButton';
import '../styles/global.css';

/**
 * React Hooks Component for ResponseTimeWrapper
 *
 * @return {React.ReactElement} a react element referring ResponseTimeWrapper
 */
const ResponseTimeWrapper = () => {
  // States
  const [result, setResult] = React.useState([]);
  const [isFoul, setIsFoul] = React.useState(false);

  const addResult = (newResult) => {
    setResult((prevResult) => {
      return [...prevResult, newResult];
    });
  };

  /**
   * Helper method to close alert modal
   */
  const closeModal = React.useCallback(() => {
    setIsFoul(false);
  }, []);

  /**
   * Helper method to open alert modal
   */
  const openModal = React.useCallback(() => {
    setIsFoul(true);
  }, []);

  /**
   * Helper method to reset game
   */
  const resetGame = React.useCallback(() => {
    setResult([]);
  }, []);

  return (
    <>
      <ResponseTime
        result={result}
        openModalFunc={openModal}
        addResultFunc={addResult}
      />
      {isFoul && <FoulModal closeModalFunc={closeModal} />}
      <ResetButton resetFunc={resetGame} />
    </>
  );
};

export default React.memo(ResponseTimeWrapper);

import React from 'react';
import Form from './Form';

const GameStartForm = ({ setGameDataFunc }) => {
  // Refs
  const rowRef = React.useRef(null);
  const columnRef = React.useRef(null);
  const mineRef = React.useRef(null);

  const onClickBtn = () => {
    setGameDataFunc(
      rowRef.current.value,
      columnRef.current.value,
      mineRef.current.value
    );
  };

  return (
    <div>
      <Form ref={rowRef} label="row" />
      <Form ref={columnRef} label="column" />
      <Form ref={mineRef} label="mine" />
      <button onClick={onClickBtn}>Go</button>
    </div>
  );
};

export default GameStartForm;

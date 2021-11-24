import React from 'react';

/**
 * FoulModal React Component that display the alert modal
 *   when user clicked the screen too fast
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.closeModalFunc Function that closes modal
 * @return {React.ReactElement} a react element referring FoulModal Component.
 */
const FoulModal = ({ closeModalFunc }) => {
  return (
    <div>
      <span>Foul: Clicked too fast!!</span>
      <button onClick={closeModalFunc}>Okay</button>
    </div>
  );
};

export default React.memo(FoulModal);

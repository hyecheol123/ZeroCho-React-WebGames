import React from 'react';
import styles from '../styles/FoulModal.module.css';

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
    <div className={styles.ModalOverlay}>
      <div className={styles.Modal}>
        <span>FOUL: Clicked too fast!!</span>
        <button onClick={closeModalFunc}>Okay</button>
      </div>
    </div>
  );
};

export default React.memo(FoulModal);

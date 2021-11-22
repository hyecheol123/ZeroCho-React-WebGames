import React from 'react';
import styles from '../styles/Trial.module.css';

/**
 * Trial React Component that makes up the a list item showing the user's trials
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {object} props.trialInfo A trial's information passed by the parent Component.
 * @param {string} props.trialKey Key of this Trial Component
 * @param {React.ForwardedRef} trialList React Ref pointing entire list.
 * @return {React.ReactElement} a react element referring Trial Component.
 */
const Trial = React.forwardRef(({ trialInfo, trialKey }, trialList) => {
  // Scroll to the bottom - Display recently added trial element
  React.useEffect(() => {
    trialList.current.scrollTop = trialList.current.scrollHeight;
    console.log('reached');
  }, [trialList]);

  return (
    <li className={styles.Trial}>
      <div className={styles.TrialTitle}>{`Trial ${trialKey}`}</div>
      <div className={styles.InputWrapper}>
        {trialInfo.try.split('').map((number, index) => (
          <div key={`${trialKey}-${index}`} className={styles.Input}>
            {number}
          </div>
        ))}
      </div>
      <div className={styles.Result}>{trialInfo.result}</div>
    </li>
  );
});

export default React.memo(Trial);

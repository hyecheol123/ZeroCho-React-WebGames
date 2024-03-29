import React from 'react';
import styles from '../../styles/GameStartForm/Form.module.css';

/**
 * React Functional Component for Form (Get user's input)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.label Label of the form
 * @param {number} props.initialValue Initial value of the form
 * @param {React.ForwardedRef} inputRef React.Ref pointing input.
 * @return {React.ReactElement} a react element referring Form
 */
const Form = React.forwardRef(({ label, initialValue }, inputRef) => {
  // State
  const [state, setState] = React.useState(initialValue);

  /**
   * Event Handler for input's change event
   *   - Change state
   *
   * @param {Event} event event which occurs when the input changes
   */
  const onInputChange = React.useCallback((event) => {
    setState(event.target.value);
  }, []);

  /**
   * Event Handler for form's submit event, used to prevent refresh on submit
   *
   * @param {Event} submitEvent event which occurs when form submitted
   */
  const onFormSubmit = React.useCallback((submitEvent) => {
    submitEvent.preventDefault();
  }, []);

  return (
    <>
      <form className={styles.Form} onSubmit={onFormSubmit}>
        <label>{`${label}: `}</label>
        <input
          type="number"
          value={state}
          onChange={onInputChange}
          min="1"
          ref={inputRef}
        />
      </form>
    </>
  );
});

Form.displayName = 'Form';

export default React.memo(Form);

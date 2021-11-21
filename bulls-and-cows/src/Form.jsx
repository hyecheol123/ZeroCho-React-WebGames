import React from 'react';

// TODO: Design change

/**
 * React Hooks Component for getting user's input.
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {function} props.onSubmitFunc Function that handles submitted user's input.
 * @param {string} props.msg Message from parent Component that will be displayed to user.
 * @return {React.ReactElement} a react element referring Form.
 */
const Form = ({ onSubmitFunc, msg }) => {
  // State
  const [value, setValue] = React.useState('');
  const [warningMsg, setWarningMsg] = React.useState(() => msg);
  // When msg sent, form needs to be disabled (Game Set)
  const isDisabled = msg !== '';

  /**
   * EventHandler function to handle submit event of form
   *
   * @param {SubmitEvent} submitEvent an HTML event generated when form submitted
   */
  const onFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    // Check value
    const userInputArray = value.split('').map((v) => parseInt(v));
    if (userInputArray.length !== 4) {
      // Length
      setWarningMsg('Input should have four numbers');
    } else if (userInputArray.filter((n) => isNaN(n)).length !== 0) {
      // Only Number
      setWarningMsg('Only numbers are allowed');
    } else if (new Set(userInputArray).size !== userInputArray.length) {
      // No Duplicate
      setWarningMsg('Four numbers should be different');
    } else {
      // No Problem
      // Forward value to parent
      onSubmitFunc(value);
      setValue('');
      setWarningMsg('');
    }
  };

  /**
   * EventHandler function to handle chaning values of input
   *
   * @param {Event} event an HTML event generated when input's value changed
   */
  const onInputChange = React.useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          maxLength={4}
          value={value}
          onChange={onInputChange}
          disabled={isDisabled}
        />
        <button disabled={isDisabled}>Submit</button>
      </form>
      {warningMsg !== '' && <div>{warningMsg}</div>}
      {msg !== '' && <div>{msg}</div>}
    </>
  );
};

export default React.memo(Form);

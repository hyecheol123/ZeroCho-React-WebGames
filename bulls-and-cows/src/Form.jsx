import React from 'react';

/**
 * React Hooks Component for getting user's input.
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {function} props.onSubmitFunc Function that handles submitted user's input.
 * @return {React.ReactElement} a react element referring Form.
 */
const Form = ({ onSubmitFunc }) => {
  // State
  const [value, setValue] = React.useState('');

  /**
   * EventHandler function to handle submit event of form
   *
   * @param {SubmitEvent} submitEvent an HTML event generated when form submitted
   */
  const onFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    onSubmitFunc(value);
    setValue('');
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
        <input maxLength={4} value={value} onChange={onInputChange} />
      </form>
    </>
  );
};

export default React.memo(Form);

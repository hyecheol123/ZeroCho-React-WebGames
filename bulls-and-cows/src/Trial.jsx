import React from 'react';

/**
 * Trial React Component that makes up the a list item showing the user's trials
 *
 * @param {object} props A properties that passed from the parent Component.
 * @return {react.ReactElement} a react element referring Trial Component.
 */
const Trial = (props) => {
  return <li>{props.trial}</li>;
};

export default Trial;

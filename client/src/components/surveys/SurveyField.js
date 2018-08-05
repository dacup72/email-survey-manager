// SurveyField contains logic to render a single label and text input
import React from 'react';

// input is props.input
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      {/* Takes all of the properties on input and adds it to the input tag */}
      <input {...input} />
    </div>
  );
};
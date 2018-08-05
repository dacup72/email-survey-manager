// SurveyField contains logic to render a single label and text input
import React from 'react';

// input is props.input
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {/* Takes all of the properties on input and adds it to the input tag */}
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
      {/* if touched is true then return error */}
      {touched && error}
      </div>
    </div>
  );
};
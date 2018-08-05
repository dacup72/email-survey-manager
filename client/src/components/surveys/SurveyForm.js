// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
// reduxForm allows this form to communicate with the redux state
// Field is a helper for rendering any type of html form elements to collect input
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
          <Field 
            type="text"
            name="surveyTitle"
            component="input"
          />
      </div>
    );
  };
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
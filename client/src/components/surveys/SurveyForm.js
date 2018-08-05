// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
// reduxForm allows this form to communicate with the redux state
// Field is a helper for rendering any type of html form elements to collect input
// Each field is going to have a component containing our custom surveyField components
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

// All caps means do not change this const
const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {/* handleSubmit is doen for us behind the sceens by reduxForm's Field  */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  };
};

// values is passed into the function by reduxForm
// values is the object recieved by the form
// the errors returned are a part of the meta object passed into the SurveyFields component
function validate(values) {
  const errors = {};

  // Check for invalid emails
  errors.emails = validateEmails(values.emails || '');

  // Check if all input fields have a value
  _.each(FIELDS, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value'
    };
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
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
import formFields from './formFields';


class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
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
  }

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
  errors.recipients = validateEmails(values.recipients || '');

  // Check if all input fields have a value
  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value'
    };
  });

  return errors;
}

// destroyOnUnmount: false prevents surveyForm from being cleared on this scope when this component is unmounted
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
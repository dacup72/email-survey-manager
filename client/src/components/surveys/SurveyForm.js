// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import _ from 'lodash';
// reduxForm allows this form to communicate with the redux state
// Field is a helper for rendering any type of html form elements to collect input
// Each field is going to have a component containing our custom surveyField components
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
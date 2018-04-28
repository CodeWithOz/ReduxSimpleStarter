import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form action=''>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
      </form>
    );

  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from 'values'
  if (!value.title) {
    errors.title = 'Enter a title';
  }
  if (!value.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!value.content) {
    errors.content = 'Enter some content please';
  }

  // if 'errors' is empty, the form is fine to submit
  // if 'errors' has any properties, reduxForm assumes form is
  // valid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);

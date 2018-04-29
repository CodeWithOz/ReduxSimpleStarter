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
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    // handleSubmit comes from reduxForm
    // setting it to the onSubmit event handler basically
    // tells React to always run the reduxForm validation
    // on form submittal. In this way, we are truly connecting
    // reduxForm to the form's submission.
    // the callback passed as an argument gets called upon
    // successful validation. As a callback, it must therefore
    // be correctly bound to the component.
    // Within this callback, we specify what happens when the
    // validation is successful (eg. sending http requests, API
    // calls, etc) with the values argument containing the
    // user's inputs.

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    );

  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
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

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
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
        <Link className='btn btn-danger' to='/'>Cancel</Link>
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
})(
  // ABSOLUTELY **NO IDEA** what is going on here, but it seems we are
  // hooking up connect and reduxForm to the PostsNew component.
  // Apparently, when you have two functions that take this ()() syntax
  // like with connect and reduxForm, you nest one inside the other as
  // done here. Looks like connect is placed inside because it returns
  // a (connected) React component, which can then be passed as an argument
  // to reduxForm
  connect(null, { createPost })(PostsNew)
);

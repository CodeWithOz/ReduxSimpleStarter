import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    console.log(this.props.postShown);
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ postShown }) {
  return { postShown };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

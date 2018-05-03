import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const postShown = this.props.postShown[this.props.match.params.id];
    if (!postShown) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{postShown.title}</h3>
        <p>Category: {postShown.categories}</p>
        <p>{postShown.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ postShown }) {
  return { postShown };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

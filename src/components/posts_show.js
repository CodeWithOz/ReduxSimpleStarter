import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
  const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { id } = this.props.match.params;
    const postShown = this.props.postShown[id];
    if (!postShown) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{postShown.title}</h3>
        <p>Category: {postShown.categories}</p>
        <p>{postShown.content}</p>
        <Link to='/' className='btn btn-primary'>Back</Link>
      </div>
    );
  }
}

function mapStateToProps({ postShown }) {
  return { postShown };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

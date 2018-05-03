import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsShow extends Component {
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

export default connect(mapStateToProps)(PostsShow);

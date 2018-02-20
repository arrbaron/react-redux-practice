import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/comments";

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addComment(e.target.author.value, e.target.content.value));
    e.target.author.value = "";
    e.target.content.value = "";
  }
  
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Author</label>
        <input type="text" name="author" />
        <label>Content</label>
        <input type="text" name="content" />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(Form);
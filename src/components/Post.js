import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Comment from "./Comment";

const Post = props => {
  return (
    <article>
      <h2>By {props.post.author}</h2>
      <p>{props.post.content}</p>
      <Form />
      {props.post.comments.map((item, index) => {
        return <Comment key={index} author={item.author} content={item.content} />
      })}
    </article>
  )
};

const mapStateToProps = state => ({
  post: state.reducer.post
});

export default connect(mapStateToProps)(Post);
import React from "react";

const Comment = props => {
  return (
    <div>
      <h3>By {props.author}</h3>
      <p>{props.content}</p>
    </div>
  )
};

export default Comment;
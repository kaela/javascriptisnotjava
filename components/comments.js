import React from "react";
import ReactDisqusComments from "react-disqus-comments";

const handleNewComment = comment => {
  console.log(comment.text);
};

const Comments = () => (
  <>
    <h2>Have any Questions?</h2>

    <ReactDisqusComments
      shortname="javascriptisnotjava"
      identifier="thread"
      title="Comments"
      url="http://javascriptisnotjava.com"
      onNewComment={handleNewComment}
    />
  </>
);

export default Comments;

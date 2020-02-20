import React from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div>This is a post</div>
      <Link to="/">Go back</Link>
    </>
  );
}

export default Post;

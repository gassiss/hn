import React from "react";
import { Link } from "react-router-dom";

function PostCard() {
  // title -> should go to source
  // source -> should go to source
  // points
  // author -> should go to user if implemented
  // comments -> should open Post with comments
  return <div />
}

function Home() {
  return (
    <>
      <div className="posts">
        <Link to="/post/1">Go to 1</Link>
        <Link to="/post/2">Go to 2</Link>
        <Link to="/post/3">Go to 3</Link>
      </div>
    </>
  );
}

export default Home;

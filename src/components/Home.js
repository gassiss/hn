import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>This is home</div>
      <div className="posts">
        <Link to="/post/1">Go to 1</Link>
        <Link to="/post/2">Go to 2</Link>
        <Link to="/post/3">Go to 3</Link>
      </div>
    </>
  );
}

export default Home;

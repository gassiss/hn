import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostCard({ title, postId, source, points, author, comments }) {
  // title -> should go to source
  // source -> should go to source
  // points
  // author -> should go to user if implemented
  // comments -> should open Post with comments
  return (
    <div className="card">
      <div className="card-header">
        <Link to={`/post/${postId}`}>{title}</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a href="" className="card-header-source">
          {" "}
          ({source})
        </a>
      </div>
      <div className="card-footer">
        <p>{points} points</p>
        <p>
          by <u>{author}</u> |
        </p>
        <Link to={`/post/${postId}`}>{comments.length} comments</Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.number).isRequired,
  postId: PropTypes.number.isRequired
};

const mockPosts = [
  {
    postId: 1,
    title: "List of coffee shops worth checking out in NY",
    source: "www.centralperk.com",
    points: 412,
    comments: [1, 2, 3],
    author: "Someone from friends"
  },
  {
    postId: 2,
    title: "A complete guide to beet farming",
    source: "www.getrichquick.com",
    points: 200,
    comments: [4, 5],
    author: "Dwight Schrute"
  },
  {
    postId: 3,
    title: "Mordor is not that hot",
    source: "www.gofigure.com",
    points: 999,
    comments: [6, 7, 8, 9, 10, 11, 12],
    author: "Sauron"
  }
];

function Home() {
  return (
    <>
      <div className="posts">
        {mockPosts.map(post => (
          <PostCard key={post.postId} {...post} />
        ))}
      </div>
    </>
  );
}

export default Home;

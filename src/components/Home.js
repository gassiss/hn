import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import timeSince from "../utils/timeSince";

function PostCard({ title, id, url, time, descendants, score, author }) {
  return (
    <div className="card">
      <div className="card-header">
        <Link to={`/post/${id}`}>{title}</Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a href="" className="card-header-source">
          {" "}
          ({url})
        </a>
      </div>
      <div className="card-footer">
        <p>
          {score} points by <u>{author}</u> {timeSince(time)} |
        </p>
        <Link to={`/post/${id}`}>{descendants} comments</Link>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  descendants: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
};

const mockPosts = [
  {
    id: 1,
    title: "List of coffee shops worth checking out in NY",
    url: "www.centralperk.com",
    score: 412,
    descendants: 3,
    kids: [1, 2, 3],
    author: "Someone from friends",
    time: 1582223692
  },
  {
    id: 2,
    title: "A complete guide to beet farming",
    url: "www.getrichquick.com",
    score: 200,
    descendants: 2,
    kids: [4, 5],
    author: "Dwight Schrute",
    time: 1582223692
  },
  {
    id: 3,
    title: "Mordor is not that hot",
    url: "www.gofigure.com",
    score: 999,
    descendants: 7,
    kids: [6, 7, 8, 9, 10, 11, 12],
    author: "Sauron",
    time: 1582223692
  },
  {
    id: 4,
    title: "1000 ways to cook shrimp",
    url: "www.bubbagumpshrimpcompany.com",
    score: 2098,
    descendants: 4,
    kids: [13, 14, 15, 16],
    author: "Forrest Gump",
    time: 1582223692
  }
];

function Home() {
  document.title = "HN Clone";

  return (
    <>
      <div className="posts">
        {mockPosts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

export default Home;

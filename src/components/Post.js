import React, { useState } from "react";
import { useParams } from "react-router-dom";

import timeSince from "../utils/timeSince";

const mockPost = {
  id: 3,
  title: "Mordor is not that hot",
  url: "www.gofigure.com",
  score: 999,
  kids: [6, 7, 8, 9, 10, 11, 12],
  time: 1582223692,
  by: "Sauron"
};

function Comment({ comment }) {
  const [isExpanded, setExpanded] = useState(true);
  const { by, time, text, comments } = comment;

  return (
    <div className="comment">
      <h4>
        {by} {timeSince(time)}
      </h4>
      <span onClick={() => setExpanded(f => !f)}>[{isExpanded ? "-" : "+"}]</span>
      <p className={isExpanded ? "" : "hidden"}>{text}</p>
      <div className={`indent${isExpanded ? "" : " hidden"}`}>
        {comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}

function Comments({ comments }) {
  if (!comments) return null;

  return comments.map(comment => <Comment comment={comment} />);
}

function Post() {
  const { id } = useParams();
  const { title, url, time, score, by } = mockPost;

  document.title = title;
  console.log(id);

  const comments = [
    {
      id: 1,
      by: "someguy",
      time: 1582223692,
      text: "some text",
      comments: [
        {
          id: 2,
          by: "some other guy",
          time: 1582223692,
          text: "some new text",
          comments: [
            {
              id: 3,
              by: "someguy",
              time: 1582223692,
              text: "some other text",
              comments: []
            }
          ]
        },
        {
          id: 4,
          by: "different guy",
          time: 1582223692,
          text: "blabal balba lbalba ",
          comments: []
        }
      ]
    }
  ];

  return (
    <div className="post-page">
      <h3>{title}</h3>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a href="">({url})</a>
      <p>
        {score} points by <u>{by}</u> {timeSince(time)} | {comments.length} comments
      </p>
      <textarea rows="5" cols="60"></textarea>
      <button>add comment</button>
      <Comments comments={comments} />
    </div>
  );
}

export default Post;

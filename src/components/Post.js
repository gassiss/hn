import React from "react";
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
      kids: [
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
      <div>comments go here</div>
    </div>
  );
}

export default Post;

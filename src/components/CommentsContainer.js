import React from "react";
import CommentsList from "./CommentsList";

const commentData = [
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [
      {
        name: "Gaurav Singh Karki",
        text: "laksjdfjkas  asldflasjfd",
        replies: [],
      },
      {
        name: "Gaurav Singh Karki",
        text: "laksjdfjkas  asldflasjfd",
        replies: [],
      },
    ],
  },
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [],
  },
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [
      {
        name: "Gaurav Singh Karki",
        text: "laksjdfjkas  asldflasjfd",
        replies: [
          {
            name: "Gaurav Singh Karki",
            text: "laksjdfjkas  asldflasjfd",
            replies: [],
          },
          {
            name: "Gaurav Singh Karki",
            text: "laksjdfjkas  asldflasjfd",
            replies: [],
          },
          {
            name: "Gaurav Singh Karki",
            text: "laksjdfjkas  asldflasjfd",
            replies: [
              {
                name: "Gaurav Singh Karki",
                text: "laksjdfjkas  asldflasjfd",
                replies: [],
              },
              {
                name: "Gaurav Singh Karki",
                text: "laksjdfjkas  asldflasjfd",
                replies: [],
              },
              {
                name: "Gaurav Singh Karki",
                text: "laksjdfjkas  asldflasjfd",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Gaurav Singh Karki",
        text: "laksjdfjkas  asldflasjfd",
        replies: [],
      },
      {
        name: "Gaurav Singh Karki",
        text: "laksjdfjkas  asldflasjfd",
        replies: [],
      },
    ],
  },
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [],
  },
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [],
  },
  {
    name: "Gaurav Singh Karki",
    text: "laksjdfjkas  asldflasjfd",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
        <CommentsList comments ={commentData} />
    </div>
  );
};

export default CommentsContainer;

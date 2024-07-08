import React from "react";

const commentsData = [
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [
      {
        name: "saket",
        text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
        replies: [
          {
            name: "saket",
            text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
            replies: [
              {
                name: "saket",
                text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
                replies: [
                  {
                    name: "saket",
                    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "saket",
        text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
        replies: [
          {
            name: "saket",
            text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
            replies: [
              {
                name: "saket",
                text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "saket",
        text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
        replies: [],
      },
      {
        name: "saket",
        text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
        replies: [],
      },
    ],
  },
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [],
  },
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [],
  },
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [],
  },
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [],
  },
  {
    name: "saket",
    text: "loream ipsum dsknfkfbkdfvb dkhbhjdbv",
    replies: [],
  },
];

export const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg mb-2">
      <img
        className="w-[2.5vw] h-[4vh] p-1 rounded-full"
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        alt="user-icon"
      />
      <div className="ml-2">
        <h1 className="font-bold">{name} :</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comments key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export const CommentsContainer = () => {
  return (
    <div>
      <div className="py-2">
        <h1 className=" text-xl font-bold">Comments :</h1>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

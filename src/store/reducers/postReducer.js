const initialState = {
  posts: [
    {
      id: 1,
      title: "The Ancient India",
      content: "The Ancient IndiaThe Ancient India",
      likes: 0,
      comments: [{ id: 1, commentDes: "nice one" }]
    },
    {
      id: 2,
      title: "The Ancient India2",
      content: "The Ancient IndiaThe Ancient India2",
      likes: 2,
      comments: [
        { id: 1, commentDes: "nice bro!" },
        { id: 2, commentDes: "yoo!" },
        { id: 3, commentDes: "wow bro!" },
      ]
    },
    {
      id: 3,
      title: "The flower",
      content: "awesome flower",
      likes: 2,
      comments: [
        { id: 1, commentDes: "nice one!" },
        { id: 2, commentDes: "nice color!" }
      ],
    },
  ],
};

const postReducer = (state = initialState, action) => {
  return state;
};

export default postReducer;

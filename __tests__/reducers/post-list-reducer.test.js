import postList from "./../../src/reducers/post-list-reducer";
import c from "./../../src/constants";

describe("Post list reducer", () => {
  let action;
  const postInfo = {
    title: "React is a joy.",
    content: "Everyone LOVES React. It's the best thing ever. Dylan can't get enough React.",
    timeStamp: 1500000000000,
    upvotes: 0,
    downvotes: 0,
    id: 0,
  };

  test("should return equivalent state if no action type is recognized", () => {
    action = { type: null };
    expect(postList([], action)).toEqual([]);
  });

  test("should add post to list array", () => {
    const { title, content, timeStamp, upvotes, downvotes, id } = postInfo;
    action = {
      type: c.ADD_POST,
      title: title,
      content: content,
      timeStamp: timeStamp,
      upvotes: upvotes,
      downvotes: downvotes,
      id: id
    };
    const futureState = [ postInfo ];
    expect(postList([], action)).toEqual([ postInfo ]);
  });

  test("should add upvote to post", () => {
    const { title, content, timeStamp, upvotes, downvotes, id } = postInfo;
    action = {
      type: c.UPVOTE,
      id: id
    };
    const upAfter = {
      title: "React is a joy.",
      content: "Everyone LOVES React. It's the best thing ever. Dylan can't get enough React.",
      timeStamp: 1500000000000,
      upvotes: 1,
      downvotes: 0,
      id: 0,
    };
    expect(postList([ postInfo ], action)).toEqual([ upAfter ]);
  });

  test("should add downvote to post", () => {
    const { title, content, timeStamp, upvotes, downvotes, id } = postInfo;
    action = {
      type: c.DOWNVOTE,
      id: id
    };
    const downAfter = {
      title: "React is a joy.",
      content: "Everyone LOVES React. It's the best thing ever. Dylan can't get enough React.",
      timeStamp: 1500000000000,
      upvotes: 1,
      downvotes: 1,
      id: 0,
    };
    expect(postList([ postInfo ], action)).toEqual([ downAfter ]);
  });

});

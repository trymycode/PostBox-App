export const createPostAction = (post) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CREATE_POST", post });
  };
};

export const createPostAction = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({ type: "CREATE_POST", post });
  };
};

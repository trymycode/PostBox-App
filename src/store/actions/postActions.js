
export const createPostAction = (post) => {
  return (dispatch, getState, {getFirestore }) => {
    // make async call to database

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      likes:4,
      authorId: authorId,
      createdAt: new Date()
    }).then (() => {
      console.log("called action")
      dispatch({ type: "CREATE_POST", post});
    }).catch((err) => {
      console.log(err,"err")
        dispatch({type:"CREATE_POST_ERROR"}, err);
    })
   
  };
};

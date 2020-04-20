
export const createPostAction = (post) => {
  return (dispatch, getState, {getFirestore }) => {
    // make async call to database

    const firestore = getFirestore();
    firestore.collection('posts').add({
      ...post,
      authorFirstName: "Coco",
      authorLastName: 'Irwin',
      likes:4,
      authorId: 123456,
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

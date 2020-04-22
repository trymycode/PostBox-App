
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
 
export const likePost = ({likes, postId}) => {
  return(dispatch, getState, {getFirestore}) =>{
    const firestore = getFirestore();
    console.log(likes,postId, "ACTIONS")
    firestore.collection('posts').doc(postId).update({likes:likes}).then(()=>{
        console.log("post like")
        dispatch({ type: 'POST_LIKE_SUCCESS'});
      }).catch((err)=>{
        console.log("post like unsuccessful");
        dispatch({ type: 'POST_LIKE_UNSUCCESS'}, err);
      })




  }
 
}
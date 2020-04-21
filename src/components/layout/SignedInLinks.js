import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  const {signOut} = props;
  return (
    <ul className="right">
        <li><NavLink to="/create-post">Create New Post</NavLink></li>
        <li><a onClick={signOut}>Logout</a></li>
        {/* show the shortname of who has logged in */}
        <li><NavLink to="/" className="btn btn-floating skyblue lighten-1">PB</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=>dispatch(signOut())
  }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);

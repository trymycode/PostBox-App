import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
class SignedInLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDetails: false,
    };
  }

  render() {
    const { signOut, profile } = this.props;
    const { openDetails } = this.state;

    
    return (
      
      <ul className="right">
        <li>
          <NavLink to="/create-post">Create New Post</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Logout</a>
        </li>
        {/* show the shortname of who has logged in */}
        <li >
          <NavLink to="/" className="btn btn-floating skyblue lighten-1">
            {profile.initials}
          </NavLink>
        </li>

      </ul>
      
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);

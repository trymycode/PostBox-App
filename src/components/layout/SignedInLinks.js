import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to="/create-post">Create New Post</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
        {/* show the shortname of who has logged in */}
        <li><NavLink to="/" className="btn btn-floating skyblue lighten-1">PB</NavLink></li>
    </ul>
  );
};
export default SignedInLinks;

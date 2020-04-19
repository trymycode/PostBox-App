import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to="/">New Project</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
        {/* show the name who has loged in */}
        <li><NavLink to="/" className="btn btn-floating purple lighten-1">PB</NavLink></li>
    </ul>
  );
};
export default SignedInLinks;

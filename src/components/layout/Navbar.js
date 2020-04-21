import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";


const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          <i className="fa fa-archive big" aria-hidden="true"></i>
          PostBox
        </Link>
        {/* show these two links based on user authentication status */}
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) =>{
  console.log("navbar state", state)
  return {

  }
}
export default connect(mapStateToProps)(Navbar);

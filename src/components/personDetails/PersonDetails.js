import React from "react";

const PersonDetails = (props) => {
  console.log("props", props);
  const url = props.details.imageUrl;
  
  if (props) {
    return (
      <div className="container">
        <div className="card z-depth-0">
          <div className="cardContent">
            <img src={url} className="profilePic" />
            <span className="card-title lighten-2 grey-text">
              {props.details.firstName.toUpperCase() +
                " " +
                props.details.lastName.toUpperCase()}
            </span>
            <p className="lighten-4 grey-text">{props.emailId}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading....</div>;
  }
};
export default PersonDetails;

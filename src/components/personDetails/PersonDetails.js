import React from "react";

const PersonDetails = (props) => {
  console.log("props", props);

  if (props) {
    
    return (
      <div className="container">
        <div className="card z-depth-0">
          <div className="cardContent">
            <img src={props.details.imageUrl} className="profilePic" />
            <span className="cardDesc" id="nameColor">
              {props.firstName +
                " " +
               props.lastName}
            </span>
            <p className="cardDesc" id="emailColor">{props.emailId}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading....</div>;
  }
};
export default PersonDetails;

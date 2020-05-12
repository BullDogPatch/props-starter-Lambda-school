// Step 7 - Create PersonDescription component skeleton
// Step 10 - Update component to use props passed from App
import React from "react";

const PersonDescription = props => {
  return (
    <div>
      <h2>{props.description}</h2>
      <span>{props.favoriteNumber()}</span>
    </div>
  );
};

export default PersonDescription;

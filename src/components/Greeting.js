// Step 4 - Create Greeting component
// Step 6 - Add props & props.name into Greeting

// I.C.E
import React from "react";

const Greeting = props => {
  console.log("props", props); // props are always an object
  return <h1>Welcome {props.name}</h1>;
};

export default Greeting;

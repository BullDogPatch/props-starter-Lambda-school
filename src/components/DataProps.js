// Step 2: Create DataProps Component & export component
// Step 12 - Update DataProps to use props in Component to read each data item in a <ul>
// Step 13 - Add key

// I.C.E === Imports, Components, export

import React from "react";

const DataProps = props => {
  console.log(props.places);
  return (
    <div>
      <h3>List of Utah places</h3>
      <ul>
        {props.places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataProps;

import React, { useState } from "react";
// Step 1 - import data.js
import { placesInUtah } from "../data";
import DataProps from "./DataProps";
import Greeting from "./Greeting";
import PersonDescription from "./PersonDescription";

//export const tempFn = () => 'Hello world'

const App = () => {
  const getFavoriteNumber = () => {
    return `fav number is ${Math.random() * 100}`;
  };

  const [data, setData] = useState(placesInUtah);
  return (
    <div>
      <h1>This is our new app</h1>
      {/* Step 3: Bring DataProps into App.js */}
      <DataProps places={data} />
      {/* Step 5 - import Greeting into App & add multiple*/}
      <Greeting name="Craig" />
      <PersonDescription
        description={"Dad"}
        favoriteNumber={getFavoriteNumber}
      />
      <Greeting name="Sahra" />
      <PersonDescription
        description={"Mum"}
        favoriteNumber={getFavoriteNumber}
      />
      <Greeting name="Jak" />
      {/* Step 8 - add PersonDescription (s) to App */}
      <PersonDescription
        description={"Son"}
        favoriteNumber={getFavoriteNumber}
      />
      {/* Step 9 - Create props for PersonDescription and render them */}
      {/* Step 11 - Pass data from App into DataProps */}
    </div>
  );
};
export default App;

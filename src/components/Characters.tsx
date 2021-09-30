import * as React from "react";
import Character from "./Character";

const Characters = ({ data }) => {
  //console.log(data);
  const renderedData = data.characters.results.map((data, index) => {
    return <Character key={index} data={data} />;
  });

  return <>{renderedData}</>;
};

export default Characters;

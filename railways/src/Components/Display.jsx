import React from "react";
import Detail from "./List";
import Practise from "./Practise";

export default function Display() {
  function display(val) {
    return (
      <Practise
        key={val.sno}
        sno={val.Sno}
        station={val.Station}
        code={val.Code}
        arrival={val.Arrival}
        departure={val.Departure}
      />
    );
  }
  return <>{Detail.map(display)}</>;
}

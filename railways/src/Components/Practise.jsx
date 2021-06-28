import React from "react";
import "./Practise.css";

export default function Practise(props) {
  return (
    <>
      {props.show != "fail" ? (
        <div className="wrap text-center">
          <div className="side_a">
            <div className="card-header">
              <h2 className="card_header">{props.sno} </h2>
            </div>
            <div className="card_body card-body">
              <blockquote className="blockquote mb-0 ">
                <h3>
                  {props.station}
                  <br />
                  <br />({props.code})
                </h3>
              </blockquote>
            </div>
          </div>
          <div className="side_b">
            <div className="day">
              <h5>Day</h5>1
            </div>
            <div className="arrival">
              <h5>Arrival Time</h5> {props.arrival}
            </div>
            <div className="day">
              <h5>Departure Time</h5>
              {props.departure}
            </div>
          </div>
        </div>
      ) : (
        <div className="wrap text-center">
          <div className="side_a">
            <h1>
              Invalid Date <br /> or Time
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

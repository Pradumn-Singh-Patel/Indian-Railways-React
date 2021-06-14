import React from "react";

export default function Practise(props) {
  return (
    <>
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
          <div className="card">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ background: "black", color: "white" }}
              >
                <h5>Day</h5>
                <b /> 1{" "}
              </li>
              <li
                className="list-group-item"
                style={{ background: "black", color: "white" }}
              >
                <h5>Arrival Time</h5>
                {props.arrival}
              </li>
              <li
                className="list-group-item"
                style={{ background: "black", color: "white" }}
              >
                <h5>Departure Time</h5>
                {props.departure}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

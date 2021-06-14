import React from "react";
import "./Practise.css";

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
          {/* <div className="card_item">
          <ul className="list-group list-group-flush">
            <li
              className="list_item list-group-item"
              style={{ background: "yellow", color: "white" }}
            >
              <h5>Day</h5>
              <b /> 1
            </li>
            <li
              className="list-group-item"
              style={{ background: "black", color: "white" }}
            >
              <h5>Arrival Time</h5> {props.arrival}
            </li>
            <li
              className="list-group-item"
              style={{ background: "black", color: "white" }}
            >
              <h5>Departure Time</h5>
              {props.departure}
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </>
  );
}

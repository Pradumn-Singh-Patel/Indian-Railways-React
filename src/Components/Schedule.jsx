import React, { useState, useEffect, useWindowDimensions } from "react";
import "./Schedule.css";
import Aos from "aos";
import Display from "./Display";

export default function Schedule() {
  const date = new Date().toDateString();

  const time = new Date().toTimeString().slice(0, 9);
  const [Time, setTime] = useState(time);
  const [value, setvalue] = useState("");
  const [styles, setstyles] = useState("");
  const [train_no, settrain_no] = useState("");
  const [select_date, setselect_date] = useState("");
  function get_time() {
    let time = new Date().toTimeString().slice(0, 9);
    setTime(time);
  }
  setInterval(get_time, 1000);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function clicked() {
    if (
      train_no.length == 5 &&
      select_date >= new Date().toISOString().slice(0, 10)
    ) {
      setvalue(<Display show={"pass"} />);
      {
        window.innerWidth > 550 ? setstyles("150vh") : setstyles("250vh");
      }
    } else {
      setvalue(<Display show={"fail"} />);
      setstyles("120vh");
    }
  }

  return (
    <div className="bottom" style={{ height: styles }}>
      <div data-aos="fade-up" className="schedule">
        <div className="title_head">Train Schedule</div>
        <div className="date">
          <h6>{date}</h6>
        </div>
        <div className="date">
          <h6>{Time}</h6>
        </div>
      </div>
      <div>
        <marquee className="marquee1" direction="left">
          Please enter the Train Number and select the Date and then click on
          get schedule.
        </marquee>
      </div>
      <div className="detail">
        <div
          data-aos={window.innerWidth > 550 ? "fade-right" : "fade-up"}
          className="train_no"
        >
          <label className="label">Enter Train Number</label>
          <input
            type="number"
            className="input"
            placeholder="Enter the train number"
            onChange={(event) => settrain_no(event.target.value)}
          />
        </div>
        <div
          data-aos={window.innerWidth > 550 ? "fade-left" : "fade-up"}
          className="train_no"
        >
          <label className="label">Select the date</label>
          <input
            type="date"
            className="input1"
            onChange={(event) => setselect_date(event.target.value)}
          />
        </div>
      </div>
      <div data-aos="fade-up" className="button">
        <button
          type="button"
          onClick={() => clicked()}
          className="btn1 btn btn-outline-primary"
          id="btn"
        >
          <h5>Get Schedule</h5>
        </button>
        <div className="note" style={{ marginTop: "1%" }}>
          *Train Schedule is shown only for reserved trains defined in the PRS
          system.
        </div>
      </div>
      <div id="container" className="container row container-fluid">
        {value}
      </div>
    </div>
  );
}

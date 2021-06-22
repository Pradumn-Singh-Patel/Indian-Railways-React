import React, { useState, useEffect } from "react";
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
      setstyles("150vh");
    } else {
      setvalue(<Display show={"fail"} />);
      setstyles("120vh");
    }
  }

  return (
    <div className="bottom" style={{ height: styles }}>
      <div data-aos="fade-up" className="schedule">
        <div className="title_head">
          <h2>Train Schedule</h2>
        </div>
        <div className="date">
          <h6>{date}</h6>
        </div>
        <div className="date">
          <h6>{Time}</h6>
        </div>
      </div>
      <div>
        <marquee className="marquee1" direction="left">
          <h5 style={{ color: "white" }}>
            Please enter the Train Number and select the Date and then click on
            get schedule.
          </h5>
        </marquee>
      </div>
      <div className="detail">
        <div data-aos="fade-right" className="train_no">
          <label className="label">
            <h4>Enter Train Number</h4>
          </label>
          <input
            type="number"
            className="input"
            placeholder="Enter the train number"
            onChange={(event) => settrain_no(event.target.value)}
          />
        </div>
        <div data-aos="fade-left" className="train_no">
          <label className="label">
            <h4>Select the date </h4>
          </label>
          <input
            type="date"
            className="input"
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
        <div style={{ marginTop: ".5%" }}>
          <h6>
            *Train Schedule is shown only for reserved trains defined in the PRS
            system.
          </h6>
        </div>
      </div>
      <div id="container" className="container row container-fluid">
        {value}
      </div>
    </div>
  );
}

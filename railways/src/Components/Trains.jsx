import React, { useEffect } from "react";
import "./Trains.css";
import Aos from "aos";
import Train_video from "../assets/Videos/Train_video.mp4";

export default function Trains() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="content">
      <div className="row">
        <marquee className="marquee" direction="left">
          <h5 style={{ color: "white" }}>
            Welcome to Indian Ralways page. Please help Indian railways and
            government of India in moving towards a digitalized and cashless
            economy, please scroll below for querry.
          </h5>
        </marquee>
      </div>
      <div className="train">
        {/* <div data-aos="fade-left" className="card">
          <h4>BOOK </h4>
          <h4>YOUR TICKET</h4>
          <h4>
            <i className="fas fa-subway" />
          </h4>
          <input type="text" />
          <h5>
            <i
              className="fas fa-exchange-alt"
              style={{ transform: "rotate(90deg)" }}
            />
          </h5>
          <input type="text" placeholde="*From" />
          <input type="date" placeholde="*From" />
          <input type="type" placeholde="*From" />
          <div className="check">
            <div className="box_title">
              <input type="checkbox" />
              <label>Flexible with Date</label>
            </div>
            <div className="box_title">
              <input type="checkbox" />
              <label>DIVYAANG</label>
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary" id="btn">
            <h5>Find Trains</h5>
          </button>
        </div> */}
        <video className="video" autoPlay muted loop>
          <source src={Train_video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

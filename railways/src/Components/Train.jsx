import React from "react";
import "./Train.css";
import Train_video from "../assets/Videos/Train_video.mp4";

export default function Train() {
  return (
    <div className="content">
      <div className="row">
        <marquee className="marquee" direction="left">
          <h3 style={{ color: "white" }}>
            Welcome to Indian Ralways page. Please help Indian railways and
            government of India in moving towards a digitalized and cashless
            economy, please scroll below for querry.
          </h3>
        </marquee>
      </div>
      <div className="train">
        <video className="video" autoPlay muted loop>
          <source src={Train_video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

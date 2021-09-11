import React, { useEffect } from "react";
import "./Trains.css";
import Aos from "aos";
import Train_video from "../../assets/Videos/Train_video.mp4";

export default function Trains() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="content">
      <div className="row">
        <marquee className="marquee" direction="left">
          Welcome to Indian Ralways page. Please help Indian railways and
          government of India in moving towards a digitalized and cashless
          economy, please scroll below for querry.
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

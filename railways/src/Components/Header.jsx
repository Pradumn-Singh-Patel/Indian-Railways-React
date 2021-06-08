import React from "react";
import "./Header.css";
import Logo from "../assets/Images/Logo.jpg";
import Loin from "../assets/Images/Loin.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={Logo} alt="Logo" />
      </div>
      <div className="title">
        <h1 style={{ color: "white" }}>INDIAN RAILWAYS ENQUIRY</h1>
      </div>
      <div className="loin">
        <img className="img_loin" src={Loin} alt="Loin" />
      </div>
    </div>
  );
}

import React from "react";
import "./Header.css";
import Logo from "../../assets/Images/Logo.jpg";
import Loin from "../../assets/Images/Loin.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="img_logo" src={Logo} alt="Logo" />
      </div>
      <div className="title">INDIAN RAILWAYS </div>
      <div className="loin">
        <img className="img_loin" src={Loin} alt="Loin" />
      </div>
    </div>
  );
}

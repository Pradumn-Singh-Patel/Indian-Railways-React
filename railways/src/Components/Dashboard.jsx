import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Trains from "./Train/Trains";
import Schedule from "./Schedule/Schedule";
import Footer from "./Footer/Footer";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Header />
      <Trains />
      <Schedule />
      <Footer />
    </div>
  );
}

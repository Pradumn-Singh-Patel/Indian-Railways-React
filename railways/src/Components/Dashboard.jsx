import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Trains from "./Trains";
import Schedule from "./Schedule";
import Footer from "./Footer";

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

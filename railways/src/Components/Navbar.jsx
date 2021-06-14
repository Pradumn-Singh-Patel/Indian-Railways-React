import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div classNameName="nav" style={{ position: "sticky", top: 0 }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          <h5>ENQUIRY</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en"
              >
                <h6>PNR Enquiry</h6>
              </a>
            </li>

            <li className="nav-item active">
              <a
                className="nav-link"
                href="http://www.indianrail.gov.in/enquiry/TBIS/TrainBetweenImportantStations.html?locale=en"
              >
                <h6>Train Between Station</h6>
              </a>
            </li>

            <li className="nav-item active">
              <a
                className="nav-link"
                href="http://www.indianrail.gov.in/enquiry/SEAT/SeatAvailability.html?locale=en"
              >
                <h6>Seat Availability</h6>
              </a>
            </li>

            <li className="nav-item active">
              <a
                className="nav-link"
                href="http://www.indianrail.gov.in/enquiry/FARE/FareEnquiry.html?locale=en"
              >
                <h6>Fare Enquiry</h6>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                <h6> Train Scheduled</h6>
              </a>
            </li>
          </ul>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light mx-2 my-2 my-sm-0"
            type="submit"
          >
            <h6>Search</h6>
          </button>
        </form>
      </nav>
    </div>
  );
}

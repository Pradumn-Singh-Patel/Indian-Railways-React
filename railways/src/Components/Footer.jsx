import React, { useEffect } from "react";
import Aos from "aos";
import "./Footer.css";
import Call from "../assets/Images/Call.jpg";
import Fb from "../assets/Images/Fb.jpg";
import Gmail from "../assets/Images/Gmail.jpg";
import Twiter from "../assets/Images/Twiter.jpg";
import Train from "../assets/Images/Train.jpg";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="footer">
      <div className="media_logo">
        <div data-aos="fade-right" className="social">
          <div className="call">
            <a href="https://www.irctc.co.in/eticketing/contact.jsf">
              <img className="img" src={Call} alt="Logo" />
            </a>
          </div>
          <div className="call">
            <a href="https://www.facebook.com/">
              <img className="img" src={Fb} alt="Logo" />
            </a>
          </div>
          <div className="call">
            <a href="https://mail.google.com/mail/u/0/#">
              <img className="img" src={Gmail} alt="Logo" />
            </a>
          </div>
          <div className="call">
            <a href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <img className="img" src={Twiter} alt="Logo" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="train_logo">
          <img className="img" src={Train} alt="Logo" />
        </div>
      </div>
      <footer>
        <div className="para  ">
          <p>Copyright &copy; 2021, Centre For Railway Information Systems.</p>
        </div>
      </footer>
    </div>
  );
}

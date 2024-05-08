import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>smvaishnavi23@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/code_with_us24/">
        <Insta color="white" size={"3rem"} />
        </a>
        <a href="https://www.linkedin.com/in/s-m-vaishnavi">
        <LinkedIn color="white" size={"3rem"} />
        </a>
        <a href="https://github.com/S-M-Vaishnavi">
        <Gitub color="white" size={"3rem"} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
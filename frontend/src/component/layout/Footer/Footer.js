import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SHOPHERA</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; NiyatiDeshmukh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/18_onwords/?hl=en">Instagram</a>
        <a href="https://www.youtube.com/@mithitales">Youtube</a>
        <a href="https://www.instagram.com/18_onwords/?hl=en">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

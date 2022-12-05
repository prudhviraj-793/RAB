import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../Assets/Logo.svg";
import fb from "../Assets/Facebook.svg";
import twitter from "../Assets/Twitter.svg";
import insta from "../Assets/Instagram.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer_1}>
        <div>
          <img src={logo} alt="logo" />
          <p>
            <b>LaslesVPN</b> is a private virtual network that has unique
            features and has high security.
          </p>
        </div>
        <div className={styles.social}>
          <img src={fb} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="insta" />
          <p>©2020LaslesVPN</p>
        </div>
      </div>
      <div className={styles.subContainer_2}>
        <nav>
          <b>Product</b>
          <ul>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Server</a>
            </li>
            <li>
              <a href="#">Countries</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.col}>
          <b>Engage</b>
          <ul>
            <li>
              <a href="#">LaslesVPN ?</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
        <nav className={styles.col}>
          <b>Earn Money</b>
          <ul>
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Become Partner</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;

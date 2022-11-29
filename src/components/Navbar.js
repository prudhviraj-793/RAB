import React from "react";
import logo from "../Assets/Logo.svg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <nav>
          <ul className={styles.navContainer}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
        <div className={styles.buttonConatiner}>
          <a href="#">Sign In</a>
          <button>Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

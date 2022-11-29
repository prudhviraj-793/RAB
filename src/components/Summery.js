import React from "react";
import styles from "../styles/Summary.module.css";
import ill1 from "../Assets/Illustration 1.svg";

function Summery() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Want anything to be easy with LaslesVPN.</h1>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button>Get Started</button>
      </div>
      <img src={ill1} alt="ill1" />
    </div>
  );
}

export default Summery;

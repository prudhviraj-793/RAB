import React from "react";
import ill2 from "../Assets/Illustration 2.svg";
import styles from "../styles/Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <img src={ill2} alt="ill2" />
      <div className={styles.services}>
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li>Powerfull online protection.</li>
          <li>Powerfull online protection.</li>
          <li>Powerfull online protection.</li>
          <li>Powerfull online protection.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;

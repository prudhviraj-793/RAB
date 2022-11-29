import React from "react";
import styles from "../styles/Plans.module.css";
import planLogo from "../Assets/Free.svg";

function Plans() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Choose Your Plan</h3>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className={styles.plansContainer}>
        <div className={styles.plan}>
          <img src={planLogo} alt="planLogo" />
          <h5>Free Plan</h5>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works on All Devices</li>
          </ul>
          <div>
            <h3>Free</h3>
            <button>Select</button>
          </div>
        </div>
        <div className={styles.plan}>
          <img src={planLogo} alt="planLogo" />
          <h5>Standard Plan</h5>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works on All Devices</li>
            <li>Connect Anyware</li>
          </ul>
          <div>
            <h3>$9 / mo</h3>
            <button>Select</button>
          </div>
        </div>
        <div className={styles.plan}>
          <img src={planLogo} alt="planLogo" />
          <h5>Premium Plan</h5>
          <ul>
            <li>Unlimited Bandwitch</li>
            <li>Encrypted Connection</li>
            <li>Yes Traffic Logs</li>
            <li>Works on All Devices</li>
            <li>Connect Anyware</li>
            <li>Get New Features</li>
          </ul>
          <div>
            <h3>$12 / mo</h3>
            <button>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;

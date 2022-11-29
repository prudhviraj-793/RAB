import React from "react";
import styles from "../styles/Numbers.module.css";
import location from "../Assets/location.svg";
import user from "../Assets/user.svg";
import server from "../Assets/Server.svg";

function Numbers() {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <img src={user} alt="user" />
        <div>
          <h3>90+</h3>
          <p>Users</p>
        </div>
      </div>
      <div className={styles.count}>
        <img src={location} alt="location" />
        <div>
          <h3>30+</h3>
          <p>Locations</p>
        </div>
      </div>
      <div className={styles.count}>
        <img src={server} alt="server" />
        <div>
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;

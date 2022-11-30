import React from "react";
import client1 from "../Assets/Mask Group.svg";
import client2 from "../Assets/Mask Group (1).svg";
import client3 from "../Assets/Mask Group (2).svg";
import client4 from "../Assets/Mask Group (3).svg";
import client5 from "../Assets/Mask Group (4).svg";
import styles from '../styles/Clients.module.css'

function Clients() {
  return (
    <div className={styles.container}>
      <img src={client1} alt="client1" />
      <img src={client2} alt="client2" />
      <img src={client3} alt="client3" />
      <img src={client4} alt="client4" />
      <img src={client5} alt="client5" />
    </div>
  );
}

export default Clients;

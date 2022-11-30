import React from "react";
import global from '../Assets/Huge Global.svg'
import styles from '../styles/Network.module.css'

function Network() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Huge Global Network of Fast VPN</h3>
        <p>
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
      </div>
      <img src={global} alt="global" />
    </div>
  );
}

export default Network;

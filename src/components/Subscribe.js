import React from "react";
import styles from '../styles/Subscribe.module.css'

function Subscribe() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Subscribe Now for Get Special Features!</h3>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div className={styles.subBtn}>
        <button>Subscribe Now</button>
      </div>
    </div>
  );
}

export default Subscribe;

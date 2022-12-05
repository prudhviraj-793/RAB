import React from "react";
import styles from "../styles/Testimonials.module.css";
import user1 from "../Assets/Ellipse 175.png";
import user2 from "../Assets/Ellipse 175 (1).png";
import user3 from "../Assets/Ellipse 175 (2).png";

function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Trusted by Thousands of Happy Customer</h3>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className={styles.users}>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <img src={user1} alt="user1" />
            <div className={styles.userName}>
              <h5>Viezh Robert</h5>
              <p>Warsaw, Poland</p>
            </div>
          </div>
          <div className={styles.review}>
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <img src={user2} alt="user2" />
            <div className={styles.userName}>
              <h5>Yessica Christy</h5>
              <p>Shanxi, China</p>
            </div>
          </div>
          <div className={styles.review}>
            <p>
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <img src={user3} alt="user3" />
            <div className={styles.userName}>
              <h5>Kim Young Jou</h5>
              <p>Seoul, South Korea</p>
            </div>
          </div>
          <div className={styles.review}>
            <p>
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.userProfile}>
            <img src={user1} alt="user1" />
            <div className={styles.userName}>
              <h5>Viezh Robert</h5>
              <p>Warsaw, Poland</p>
            </div>
          </div>
          <div className={styles.review}>
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <button>=</button>
        <button>=</button>
      </div> */}
    </div>
  );
}

export default Testimonials;

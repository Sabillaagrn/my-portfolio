import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about" >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" className={styles.iconImg}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm frontend developer eith experience in build and optimized
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and opyimized and API</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" className={styles.iconImg}/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed mulriple landing page and have created systems
                as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sabilla Anggraeni</h1>
        <p className={styles.description}>
          I'm very passionate about technology and creativity. I have a
          particular interest in web development, especiallly in the areas of
          Front-end Development and UI/UX Design.
        </p>
        <a
          href="mailto:sabillaanggraeni172@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimage2.png")}
        alt="hero-image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

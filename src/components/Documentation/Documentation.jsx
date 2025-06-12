import React, { useState } from "react";
import styles from "./Documentation.module.css";
import docs from "../../data/documentation.json"; // array foto kegiatan
import { getImageUrl } from "../../utils";

export const Documentation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? docs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === docs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="documentation" className={styles.container}>
      <h2 className={styles.title}>Documentation</h2>
      <div className={styles.slider}>
        <button className={styles.navButton} onClick={handlePrev}>
          &#10094;
        </button>
        <img
          src={getImageUrl(docs[currentIndex].imageSrc)}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.image}
        />
        <button className={styles.navButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

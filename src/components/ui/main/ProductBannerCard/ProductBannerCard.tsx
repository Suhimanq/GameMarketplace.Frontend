"use client";

import { SetStateAction, useEffect, useState } from "react";
import styles from "./ProductBannerCard.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  { src: "/ProductBannerImages/cs2.png", alt: "CS2 Image" },
  { src: "/ProductBannerImages/RB6.png", alt: "RB6 Image" },
  { src: "/ProductBannerImages/dota2.png", alt: "Dota2 Image" },
];

export default function ProductBannerCard() {
  const t = useTranslations("ProductBannerCard");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles.fadeIn);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    console.log(isPaused);
    if (isPaused) return;

    const interval = setInterval(() => {
      setFadeClass(styles.fadeOut);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass(styles.fadeIn);
      }, 500);
    }, 6000);
    console.log(setTimeout);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleIndicatorClick = (index: SetStateAction<number>) => {
    setFadeClass(styles.fadeOut);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass(styles.fadeIn);
    }, 500);
  };

  return (
    <div className={styles.carouselContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            currentIndex === index ? styles.active : ""
          } ${currentIndex === index ? fadeClass : ""}`}
        >
          <Image src={image.src} height={600} width={1440} alt={image.alt} />
        </div>
      ))}
      <div className={styles.text_container}>
        <div className={styles.text}>{t("special_offers")}</div>
      </div>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.activeIndicator : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          ></span>
        ))}
      </div>
    </div>
  );
}

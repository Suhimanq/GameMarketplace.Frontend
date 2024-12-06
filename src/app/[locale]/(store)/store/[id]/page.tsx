"use client";

import { useParams } from "next/navigation";
import styles from "./page.module.scss";
import MainNavigation from "@/components/main/MainNavigation/MainNavigation";
import { storeItemsData } from "./data/ItemsData";
import { Button } from "@mui/base/Button/Button";
import { useState } from "react";

export default function StoreItem() {
  const { id } = useParams();
  const itemId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const storeItem = storeItemsData.find((item) => item.id === itemId);

  if (!storeItem) {
    return <div>Элемент не найден</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % storeItem.previewTrailers.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? storeItem.previewTrailers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.main_body}>
      <div className={styles.navigation_block}>
        <MainNavigation />
      </div>
      <div className={styles.product_block}>
        <div className={styles.left_block}>
          {/\.(mp4|webm|ogg|avi|mov|wmv|flv|mkv|mpeg|mpg|3gp|ts)(\?.*)?$/i.test(
            storeItem.previewTrailers[0]
          ) ? (
            <video
              src={storeItem.previewTrailers[0]}
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <div className={styles.image_trailer}>
              <button onClick={prevImage} className={styles.arrow_button_prev}>←</button>
              <img
                src={storeItem.previewTrailers[currentIndex]}
                alt={`${storeItem.name} trailer ${currentIndex + 1}`}
                className={styles.product_image}
              />
              <button onClick={nextImage} className={styles.arrow_button_next}>→</button>
            </div>
          )}
        </div>

        <div className={styles.right_block}>
          <div>
            <img
              src={storeItem.visualContent[0]}
              alt={storeItem.name}
              className={styles.logo_product}
            />
            <h2>{storeItem.name}</h2>
            <p>Платформа: {storeItem.platform.join(", ")}</p>
            <p>Сервис: {storeItem.gameService.join(", ")}</p>
            <p>Категории: {storeItem.category.join(", ")}</p>
            <p>
              Цена:{" "}
              {storeItem.price === 0 ? "Бесплатно" : `${storeItem.price} $`}
            </p>
            <Button className={styles.price_button}>Купить</Button>
            <p className={styles.release_date}>
              Дата выхода: {storeItem.releaseDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

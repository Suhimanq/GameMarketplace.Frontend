"use client";

import { useParams } from "next/navigation";
import styles from "./page.module.scss";
import MainNavigation from "@/components/main/MainNavigation/MainNavigation";
import { storeItemsData } from "./data/ItemsData";
import { Button } from "@mui/base/Button/Button";

export default function StoreItem() {
  const { id } = useParams();
  const itemId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

  const storeItem = storeItemsData.find((item) => item.id === itemId);

  if (!storeItem) {
    return <div>Элемент не найден</div>;
  }

  return (
    <div className={styles.main_body}>
      <div className={styles.navigation_block}>
        <MainNavigation />
      </div>
      <div className={styles.product_block}>
        <div className={styles.left_block}></div>
        <div className={styles.right_block}>
          <div>
            <img src={storeItem.visualContent[0]} alt={storeItem.name} className={styles.logo_product}/>
            <h2>{storeItem.name}</h2>
            <p>Платформа: {storeItem.platform.join(", ")}</p>
            <p>Сервис: {storeItem.gameService.join(", ")}</p>
            <p>Категории: {storeItem.category.join(", ")}</p>
            <p>
              Цена:{" "}
              {storeItem.price === 0 ? "Бесплатно" : `${storeItem.price} $`}
            </p>
            <Button className={styles.price_button}>
              Купить
            </Button>
            <p className={styles.release_date}>Дата выхода: {storeItem.releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

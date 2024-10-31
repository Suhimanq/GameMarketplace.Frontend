import { useTranslations } from "next-intl";
import styles from "./GameProduct.module.scss";
import GameProductCard from "./ui/GameServicesProductCard/GameServicesProductCard";

export default function GameProduct() {
  const t = useTranslations("GameProductPage");
  return (
    <div className={styles.game_body}>
      <div className={styles.header}>
        <h4 className={styles.title}>{t("game_services")}</h4>
      </div>
      <div className={styles.game_product_cards}>
        <GameProductCard />
      </div>
    </div>
  );
}

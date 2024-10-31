import { useTranslations } from "next-intl";
import styles from "./NetworkProduct.module.scss";
import NetworkProductCard from "./ui/NetworkServicesProductCard";

export default function GameProduct() {
  const t = useTranslations("NetworkProductPage");
  return (
    <div className={styles.game_body}>
      <div className={styles.header}>
        <h4 className={styles.title}>{t("network_services")}</h4>
      </div>
      <div className={styles.game_product_cards}>
        <NetworkProductCard />
      </div>
    </div>
  );
}

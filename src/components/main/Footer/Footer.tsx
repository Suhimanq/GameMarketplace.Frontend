import styles from "./Footer.module.scss";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("FooterPage");
  return (
    <div className={styles.footer_block}>
      <div className={styles.footer_content}>
      {t("footer_info")}
      </div>
    </div>
  );
}

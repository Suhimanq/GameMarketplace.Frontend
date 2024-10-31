import styles from "./MainTagNew.module.scss";
import { useTranslations } from "next-intl";

export default function TagNew() {
  const t = useTranslations("MainTagNew");
  return <div className={styles.new}>{t("new")}</div>;
}

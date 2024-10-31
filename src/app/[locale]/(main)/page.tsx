import MainBanner from "@/components/main/MainBanner/MainBanner";
import MainNavigation from "@/components/main/MainNavigation/MainNavigation";
import MainProducts from "@/components/main/MainProducts/MainProducts";
import styles from "@/styles/home-page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.body_container}>
      <MainNavigation />
      <MainBanner />
      <div className={styles.products_body}>
        <MainProducts category={"Game"} />
        <MainProducts category={"Network"} />
      </div>
    </div>
  );
}

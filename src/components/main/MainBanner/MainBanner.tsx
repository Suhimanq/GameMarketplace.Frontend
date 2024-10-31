"use client";

import MainBannerCard from "@/components/ui/main/MainBannerCard/MainBannerCard";
import styles from "./MainBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner_body}>
      <div className={styles.content_block}>
        <MainBannerCard />
      </div>
    </div>
  );
}

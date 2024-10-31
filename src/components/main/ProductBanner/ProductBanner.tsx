"use client";

import ProductBannerCard from "@/components/ui/main/ProductBannerCard/ProductBannerCard";
import styles from "./ProductBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner_body}>
      <div className={styles.content_block}>
        <ProductBannerCard/>
      </div>
    </div>
  );
}

"use client";

import MainNavigation from "@/components/main/MainNavigation/MainNavigation";
import ProductBanner from "@/components/main/ProductBanner/ProductBanner";
import styles from "./StorePage.module.scss";
import StoreProduct from "@/components/ui/main/StoreProducts/StoreProduct";
import StoreFilter from "@/components/ui/main/StoreFilter/StoreFilter";

export default function StorePage() {
  return (
    <div className={styles.main_body}>
      <MainNavigation />
      <div className={styles.product_banner}>
        <ProductBanner />
      </div>
      <div className={styles.store_body}>
        <div className={styles.store_products}>
          <StoreProduct />
        </div>
        <div className={styles.store_filters}>
          {/* <StoreFilter /> */}
        </div>
      </div>
    </div>
  );
}

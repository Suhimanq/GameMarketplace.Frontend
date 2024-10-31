import React, { useState } from "react";
import { storeProductData } from "./ui/StoreProductData";
import { StoreProductProps } from "./StoreProduct.props";
import styles from "./StoreProduct.module.scss";
import { useTranslations } from "next-intl";
import StoreFilter from "../StoreFilter/StoreFilter";

export default function StoreProducts() {
  const t = useTranslations("StoreProducts");
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "1",
    platform: "1",
    priceRange: [0, 100],
  });

  const handleFilterChange = (
    newFilters: React.SetStateAction<{
      searchTerm: string;
      category: string;
      platform: string;
      priceRange: number[];
    }>
  ) => {
    setFilters(newFilters);
  };

  const filteredProducts = storeProductData.filter(
    (product: StoreProductProps) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
      const matchesCategory =
        filters.category === "1" || product.category.includes(filters.category);
      const matchesPlatform =
        filters.platform === "1" || product.platform.includes(filters.platform);
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      return (
        matchesSearch && matchesCategory && matchesPlatform && matchesPrice
      );
    }
  );

  return (
    <div className={styles.main_body}>
      <div className={styles.product_list_body}>
        {filteredProducts.map((product: StoreProductProps) => (
          <div key={product.id} className={styles.product_item}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.product_image}
            />
            <div className={styles.product_details}>
              <div className={styles.product_name}>{product.name}</div>
              <div className={styles.platform}>{product.platform.join(", ")}</div>
              <div className={styles.category}>
                Category: {product.category.join(", ")}
              </div>
            </div>
            <div className={styles.price}>
              {product.price === 0 ? t("free") : `${product.price.toFixed(2)}$`}
            </div>
            <div className={styles.release_date}>
              Release Date: {product.releaseDate}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.store_filter}>
        <StoreFilter onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

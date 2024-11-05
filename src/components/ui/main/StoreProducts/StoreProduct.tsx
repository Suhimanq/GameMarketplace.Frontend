import React, { useState, useEffect } from "react";
import { storeProductData } from "./ui/StoreProductData";
import { StoreProductProps } from "./StoreProduct.props";
import styles from "./StoreProduct.module.scss";
import { useTranslations } from "next-intl";
import StoreFilter from "../StoreFilter/StoreFilter";
import Link from "next/link";

export default function StoreProducts() {
  const t = useTranslations("StoreProducts");
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "1",
    platform: "1",
    priceRange: [0, 100],
  });

  const [visibleProducts, setVisibleProducts] = useState<StoreProductProps[]>([]);
  const [productCount, setProductCount] = useState(15);

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

  useEffect(() => {
    setVisibleProducts(filteredProducts.slice(0, productCount));
  }, [productCount, filters]);

  const handleFilterChange = (
    newFilters: React.SetStateAction<{
      searchTerm: string;
      category: string;
      platform: string;
      priceRange: number[];
    }>
  ) => {
    setFilters(newFilters);
    setProductCount(15);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        productCount < filteredProducts.length
      ) {
        setProductCount((prevCount) => prevCount + 15);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [productCount, filteredProducts.length]);

  return (
    <div className={styles.main_body}>
      <div className={styles.product_list_body}>
        {visibleProducts.map((product: StoreProductProps) => (
          <Link href={`/store/${product.id}`} key={product.id} className={styles.link}>
            <div className={styles.product_item}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.product_image}
              />
              <div className={styles.product_details}>
                <div className={styles.product_name}>{product.name}</div>
                <div className={styles.platform}>
                  {product.platform.join(", ")}
                </div>
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
          </Link>
        ))}
      </div>
      <div className={styles.store_filter}>
        <StoreFilter onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}
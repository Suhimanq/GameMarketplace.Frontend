"use client";

import styles from "./MainProducts.module.scss";
import type { MainProductsProps } from "./MainProducts.props";
import GameProduct from "./ui/GameServices/GameProduct";
import NetworkProduct from "./ui/NetworkProduct/NetworkProduct";

export default function MainProducts({ category }: MainProductsProps) {
  return (
    <div className={styles.product_body}>
      {category === "Game" ? <GameProduct /> : <NetworkProduct />}
    </div>
  );
}

import Link from "next/link";
import styles from "./Logo.module.scss";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.logo_block}>
      <Link href="/">
        <img
          src="/Background/logo.png"
          alt="Logo"
          width={134}
          height={70}
          loading="eager"
          className={styles.logo}
        />
      </Link>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./MainHeader.module.scss";
import Link from "next/link";
import Logo from "@/components/global/Logo/Logo";
import LocalSelect from "@/components/global/LocalSelect/LocalSelect";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function MainHeader() {
  const t = useTranslations("HeaderNavMenu");
  const a = useTranslations("HeaderAuth");
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isStoreMenuOpen, setIsStoreMenuOpen] = useState(false);
  const [isCommunityMenuOpen, setIsCommunityMenuOpen] = useState(false);
  const [isChatsMenuOpen, setIsChatsMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    const formParam = searchParams.get("form");
    const isAuth = pathname.includes("/auth") && 
                   (formParam === "login" || formParam === "register");

    setIsAuthPage(isAuth);
  }, [pathname, searchParams]);

  const handleMenuClose = () => {
    setIsStoreMenuOpen(false);
    setIsCommunityMenuOpen(false);
    setIsChatsMenuOpen(false);
    setIsSupportMenuOpen(false);
  };

  return (
    <div className={styles.header_block}>
      <nav className={styles.nav_block}>
        <div className={styles.left_block}>
          <div className={styles.logo_block}>
            <Logo />
          </div>
        </div>
        <div className={styles.center_block}>
          <nav className={styles.navigation_menu}>
            <div
              className={styles.menu_item}
              onMouseEnter={() => setIsStoreMenuOpen(true)}
              onMouseLeave={() => setIsStoreMenuOpen(false)}
            >
              <Link
                className={styles.link_item}
                href={"/store"}
                onClick={handleMenuClose}
              >
                {t("store_title")}
              </Link>
              {isStoreMenuOpen && (
                <div className={styles.dropdown_menu}>
                  <Link href={"/"} onClick={handleMenuClose}>
                    {t("home")}
                  </Link>
                  <Link href={"/store/sales"} onClick={handleMenuClose}>
                    {t("top_products")}
                  </Link>
                  <Link href={"/store/sales"} onClick={handleMenuClose}>
                    {t("sales")}
                  </Link>
                </div>
              )}
            </div>
            <div
              className={styles.menu_item}
              onMouseEnter={() => setIsCommunityMenuOpen(true)}
              onMouseLeave={() => setIsCommunityMenuOpen(false)}
            >
              <Link
                className={styles.link_item}
                href={"/community"}
                onClick={handleMenuClose}
              >
                {t("community_title")}
              </Link>
              {isCommunityMenuOpen && (
                <div className={styles.dropdown_menu}>
                  <Link
                    href={"/community/discussions"}
                    onClick={handleMenuClose}
                  >
                    {t("discussions")}
                  </Link>
                  <Link href={"/community/forum"} onClick={handleMenuClose}>
                    {t("forum")}
                  </Link>
                  <Link href={"/community/groups"} onClick={handleMenuClose}>
                    {t("groups")}
                  </Link>
                </div>
              )}
            </div>
            <div
              className={styles.menu_item}
              onMouseEnter={() => setIsChatsMenuOpen(true)}
              onMouseLeave={() => setIsChatsMenuOpen(false)}
            >
              <Link
                className={styles.link_item}
                href={"/chat"}
                onClick={handleMenuClose}
              >
                {t("chat_title")}
              </Link>
              {isChatsMenuOpen && (
                <div className={styles.dropdown_menu}>
                  <Link href={"/chat"} onClick={handleMenuClose}>
                    {t("private_chats")}
                  </Link>
                  <Link href={"/chat/group"} onClick={handleMenuClose}>
                    {t("group_chats")}
                  </Link>
                </div>
              )}
            </div>
            <div
              className={styles.menu_item}
              onMouseEnter={() => setIsSupportMenuOpen(true)}
              onMouseLeave={() => setIsSupportMenuOpen(false)}
            >
              <Link
                className={styles.link_item}
                href={"/support"}
                onClick={handleMenuClose}
              >
                {t("support_title")}
              </Link>
              {isSupportMenuOpen && (
                <div className={styles.dropdown_menu}>
                  <Link href={"/support/contact"} onClick={handleMenuClose}>
                    {t("contact_support")}
                  </Link>
                  <Link href={"/support/faq"} onClick={handleMenuClose}>
                    {t("faq")}
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className={styles.right_block}>
          <div className={styles.local_block}>
            <LocalSelect />
          </div>
          {!isAuthPage && (
            <div className={styles.top_block}>
              <div className={styles.login_block}>
                <Link
                  className={styles.login_btn}
                  href={`/${locale}/auth?form=login`}
                  onClick={handleMenuClose}
                >
                  {a("login")}
                </Link>
              </div>
              <div className={styles.border_auth}>|</div>
              <div className={styles.register_block}>
                <Link
                  className={styles.register_btn}
                  href={`/${locale}/auth?form=register`}
                  onClick={handleMenuClose}
                >
                  {a("register")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

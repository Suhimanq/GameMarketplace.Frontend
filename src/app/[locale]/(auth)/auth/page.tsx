"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.scss";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoginActive, setIsLoginActive] = useState(
    localStorage.getItem("authForm") === "login" ? true : false
  );

  useEffect(() => {
    const form = searchParams.get("form");
    if (form) {
      const isLogin = form === "login";
      setIsLoginActive(isLogin);
      localStorage.setItem("authForm", form);
    } else {
      const savedForm = localStorage.getItem("authForm");
      setIsLoginActive(savedForm === "login");
    }
  }, [searchParams]);

  const toggleForms = () => {
    const newForm = isLoginActive ? "register" : "login";
    setIsLoginActive(!isLoginActive);
    localStorage.setItem("authForm", newForm);
    router.push(`?form=${newForm}`);
  };

  return (
    <div className={styles.auth_sheet}>
      <div className={styles.auth_block}>
        {/* Левая часть */}
        <div
          className={`${styles.left_block} ${
            isLoginActive ? "" : styles.hidden
          }`}
        >
          <div className={styles.auth_login_title}>{t("login_title")}</div>
          <div className={styles.auth_box}>
            <div className={styles.auth_content}>
              <div className={styles.auth_name}>{t("login_name")}</div>
              <TextField
                sx={textFieldStyles}
                id="outlined-basic"
                variant="outlined"
              />
              <div className={styles.auth_password}>{t("login_password")}</div>
              <TextField
                id="outlined-password-input"
                type="password"
                autoComplete="current-password"
                sx={textFieldStyles}
              />
              <FormControlLabel
                sx={formControlLabelStyles}
                value="end"
                control={<Checkbox />}
                label={t("login_remember_btn")}
                labelPlacement="end"
              />
              <div className={styles.auth_btn}>
                <Link href="/">{t("login_enter_btn")}</Link>
              </div>
              <button onClick={toggleForms} className={styles.switch_button}>
                {t("no_account")}
              </button>
            </div>
          </div>
        </div>

        {/* Прямоугольник */}
        <div
          className={`${styles.moving_rectangle} ${
            isLoginActive ? styles.show_right : styles.show_left
          }`}
        ></div>

        {/* Правая часть */}
        <div
          className={`${styles.right_block} ${
            isLoginActive ? styles.hidden : ""
          }`}
        >
          <div className={styles.auth_reg_title}>{t("reg_title")}</div>
          <div className={styles.auth_box}>
            <div className={styles.auth_content}>
              <div className={styles.auth_name}>{t("reg_name")}</div>
              <TextField
                sx={textFieldStyles}
                id="outlined-basic"
                variant="outlined"
              />
              <div className={styles.auth_password}>{t("reg_password")}</div>
              <TextField
                id="outlined-password-input"
                type="password"
                autoComplete="current-password"
                sx={textFieldStyles}
              />
              <div className={styles.auth_password}>
                {t("second_reg_password")}
              </div>
              <TextField
                id="outlined-password-input"
                type="password"
                autoComplete="current-password"
                sx={textFieldStyles}
              />
              <div className={styles.auth_btn}>
                <Link href="/">{t("reg_enter_btn")}</Link>
              </div>
              <button onClick={toggleForms} className={styles.switch_button}>
                {t("have_account")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const textFieldStyles = {
  input: {
    color: "#afafaf",
    fontSize: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1b2838",
    },
    "&:hover fieldset": {
      borderColor: "#1b2838",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1b2838",
      boxShadow: "none",
    },
  },
};

const formControlLabelStyles = {
  color: "#afafaf",
  "& .MuiFormControlLabel-label": {
    fontSize: "12px",
  },
};

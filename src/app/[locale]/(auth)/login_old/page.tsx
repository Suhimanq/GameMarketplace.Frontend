"use client";

import styles from "./page.module.scss";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  return (
    <div className={styles.login_sheet}>
      <div className={styles.login_block}>
        <div className={styles.login_title}>{t("login_title")}</div>
        <div className={styles.login_box}>
          <div className={styles.login_content}>
            <div className={styles.login_name}>{t("login_name")}</div>
            <TextField
              sx={{
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
              }}
              id="outlined-basic"
              variant="outlined"
            />

            <div className={styles.login_password}>{t("login_password")}</div>
            <TextField
              id="outlined-password-input"
              type="password"
              autoComplete="current-password"
              sx={{
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
              }}
            />

            <FormControlLabel
              sx={{
                color: "#afafaf",
                "& .MuiFormControlLabel-label": {
                  fontSize: "12px",
                },
              }}
              value="end"
              control={<Checkbox />}
              label={t("login_remember_btn")}
              labelPlacement="end"
            />
            <div className={styles.login_btn}>
              <Link href="/">{t("login_enter_btn")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

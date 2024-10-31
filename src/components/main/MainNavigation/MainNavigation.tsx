"use client";

import { SetStateAction, useState } from "react";
import Link from "@mui/material/Link/Link";
import styles from "./MainNavigation.module.scss";
import TextField from "@mui/material/TextField/TextField";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MainNavigation() {
  const t = useTranslations("NavMenu");
  const [inputValue, setInputValue] = useState("");

  const textFieldStyles = {
    width: "100%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      height: "30px",
      "& fieldset": {
        color: "white",
        border: "0px",
      },
      "&:hover fieldset": {
        color: "white",
        border: "0px",
      },
      "&.Mui-focused fieldset": {
        color: "white",
        border: "0px",
      },
      "& input": {
        height: "30px",
        padding: "0 0",
        boxSizing: "border-box",
        color: "#c4c4c4",
      },
    },
  };

  const inputLabelStyles = {
    fontSize: "14px",
    color: "#c4c4c4",
    top: "50%",
    transform: "translate(8px, -50%)",
    transition: "opacity 0.3s ease",
    opacity: inputValue ? 0 : 1,
    "&.Mui-focused": {
      color: "#c4c4c486",
    },
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.nav_block}>
      <div className={styles.links_box}>
        <Link className={styles.nav_element}>{t("categories")}</Link>
        <Link className={styles.nav_element}>{t("selling")}</Link>
        <Link className={styles.nav_element}>{t("partnership")}</Link>
        <Link className={styles.nav_element}>{t("guides")}</Link>
        <Link className={styles.nav_element}>{t("garanties")}</Link>
        <Link className={styles.nav_element}>{t("services")}</Link>
      </div>
      <div className={styles.search_box}>
        <div className={styles.search_box_content}>
          <Search className={styles.search_icon} />
          <TextField
            label={t("search_label")}
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            sx={textFieldStyles}
            className={styles.box_field}
            InputLabelProps={{
              shrink: false,
              sx: inputLabelStyles,
            }}
          />
        </div>
      </div>
    </div>
  );
}

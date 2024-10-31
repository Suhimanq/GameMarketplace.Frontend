import styles from "./LocalSelect.module.scss";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const dropdownStyles = {
  background: "#252525",
};

const menuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#1e1e1e",
      color: "#dcdedf",
    },
  },
};

const selectStyles = {
  fontSize: "12px",
  maxHeight: "14.5px",
  padding: "1px 2px",
  backgroundColor: "rgb(27, 40, 56)",
  color: "#dcdedfa9",
  borderRadius: "5px",
  borderColor: "transparent",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
};

const menuItemStyles = {
  color: "white",
  fontSize: "12px",
  height: "22px",
  "&:hover": {
    backgroundColor: "#333333",
  },
};

export default function LocalSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const handleChange = (event: SelectChangeEvent) => {
    const nextLocale = event.target.value as string;
    const cleanedPathname = pathname.replace(/^\/(en|ru)/, "");

    router.replace(`/${nextLocale}${cleanedPathname}`);
  };

  return (
    <div className={styles.local_select_body}>
      <FormControl fullWidth sx={dropdownStyles} focused>
        <Select
          sx={selectStyles}
          defaultValue={localActive}
          value={localActive}
          label="Language"
          onChange={handleChange}
          variant="outlined"
          displayEmpty
          MenuProps={menuProps}
        >
          <MenuItem value={"en"} sx={menuItemStyles}>
            English
          </MenuItem>
          <MenuItem value={"ru"} sx={menuItemStyles}>
            Русский
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

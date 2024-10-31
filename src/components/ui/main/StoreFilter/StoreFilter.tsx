import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Slider,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { FilterProps } from "./Filter.props";
import { SelectChangeEvent } from "@mui/material";

const darkBlue = "#1b2838";
const mediumBlue = "#2a475e";
const accentBlue = "#66c0f4";

const filterBoxStyles = {
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const searchFieldStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: mediumBlue,
    color: accentBlue,
    "& fieldset": {
      borderColor: accentBlue,
    },
    "&:hover fieldset": {
      borderColor: accentBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: accentBlue,
    },
  },
  "& .MuiInputLabel-root": {
    color: accentBlue,
    "&.Mui-focused": {
      color: accentBlue,
    },
  },
};

const formControlStyles = {
  "& .MuiInputLabel-root": {
    color: accentBlue,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: accentBlue,
    },
    "&:hover fieldset": {
      borderColor: accentBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: accentBlue,
    },
  },
};

const menuProps = {
  PaperProps: {
    sx: {
      backgroundColor: mediumBlue,
      color: accentBlue,
      "& .MuiMenuItem-root": {
        color: accentBlue,
        "&:hover": {
          backgroundColor: darkBlue,
          color: accentBlue,
        },
        "&.Mui-selected": {
          backgroundColor: darkBlue,
          color: accentBlue,
        },
      },
    },
  },
};

const sliderStyles = {
  color: accentBlue,
  "& .MuiSlider-thumb": {
    backgroundColor: mediumBlue,
  },
  "& .MuiSlider-track": {
    backgroundColor: accentBlue,
  },
  "& .MuiSlider-rail": {
    backgroundColor: mediumBlue,
  },
};

export default function StoreFilter({ onFilterChange }: FilterProps) {
  const t = useTranslations("StoreFilter");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("1");
  const [platform, setPlatform] = useState<string>("1");
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value, category, platform, priceRange });
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setCategory(value);
    onFilterChange({ searchTerm, category: value, platform, priceRange });
  };

  const handlePlatformChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setPlatform(value);
    onFilterChange({ searchTerm, category, platform: value, priceRange });
  };

  const handlePriceChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
      onFilterChange({ searchTerm, category, platform, priceRange: newValue });
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("1");
    setPlatform("1");
    setPriceRange([0, 100]);
    onFilterChange({
      searchTerm: "",
      category: "1",
      platform: "1",
      priceRange: [0, 100],
    });
  };

  return (
    <Box sx={filterBoxStyles}>
      <TextField
        label={t("search")}
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        sx={searchFieldStyles}
      />
      <FormControl variant="outlined" fullWidth sx={formControlStyles}>
        <InputLabel>{t("category")}</InputLabel>
        <Select
          label={t("category")}
          value={category}
          onChange={handleCategoryChange}
          MenuProps={menuProps}
          sx={{
            "& .MuiSelect-outlined": {
              backgroundColor: mediumBlue,
              color: accentBlue,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: accentBlue,
            },
          }}
        >
          <MenuItem value="1">{t("all")}</MenuItem>
          <MenuItem value="Action">{t("action")}</MenuItem>
          <MenuItem value="Adventure">{t("adventure")}</MenuItem>
          <MenuItem value="Music">{t("music")}</MenuItem>
          <MenuItem value="Video">{t("video")}</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" fullWidth sx={formControlStyles}>
        <InputLabel>{t("platform")}</InputLabel>
        <Select
          label={t("platform")}
          value={platform}
          onChange={handlePlatformChange}
          MenuProps={menuProps}
          sx={{
            "& .MuiSelect-outlined": {
              backgroundColor: mediumBlue,
              color: accentBlue,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: accentBlue,
            },
          }}
        >
          <MenuItem value="1">{t("all")}</MenuItem>
          <MenuItem value="Windows">{t("windows")}</MenuItem>
          <MenuItem value="IOS">{t("ios")}</MenuItem>
          <MenuItem value="Android">{t("android")}</MenuItem>
        </Select>
      </FormControl>
      <Box>
        <span style={{ color: accentBlue }}>{t("price")}</span>
        <Slider
          value={priceRange}
          min={0}
          max={100}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          sx={sliderStyles}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={resetFilters}>
        {t("resetFilters")}
      </Button>
    </Box>
  );
}

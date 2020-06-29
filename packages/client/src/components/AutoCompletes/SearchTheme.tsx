import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { useTranslation } from "react-i18next";

import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { AppThemes, ThemeTypes } from "../../Theme";
import ThemeOptions from "./ThemeOption";

const SearchTheme = () => {
  const { t } = useTranslation();
  const themes = Object.keys(AppThemes);
  const { theme, setTheme } = useGlobalTheme();

  const SelectTheme = (_e: object, value: string | null) => {
    if (value) {
      setTheme(value as ThemeTypes);
    }
  };

  return (
    themes && (
      <Autocomplete
        id="search-theme"
        value={theme}
        options={themes}
        getOptionLabel={(option) => option}
        renderOption={(option) => <ThemeOptions theme={option as ThemeTypes} />}
        disableClearable
        onChange={SelectTheme}
        renderInput={(params) => (
          <TextField {...params} label={t("general.ui.search.theme")} />
        )}
      />
    )
  );
};

export default SearchTheme;

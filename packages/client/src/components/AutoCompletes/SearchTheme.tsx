import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { useTranslation } from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";

import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { AppThemes, ThemeTypes } from "../../Theme";
import ThemeOptions from "./ThemeOption";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      height: theme.spacing(3),
      width: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
  })
);

const SearchTheme = () => {
  const classes = useStyles();
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

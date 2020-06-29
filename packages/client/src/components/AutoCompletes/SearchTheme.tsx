import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { useTranslation } from "react-i18next";

import { useGlobalTheme } from "../../hooks/useGlobalTheme";
import { AppThemes, ThemeTypes } from "../../Theme";
import ThemeOptions from "./ThemeOption";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      height: theme.spacing(3),
      width: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
    input: {
      cursor: "pointer",
    },
  })
);

const SearchTheme = () => {
  const classes = useStyles();
  const themes = Object.keys(AppThemes);
  const { t } = useTranslation();
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
        value={t(`general.colors.${theme}`)}
        options={themes}
        getOptionLabel={(option) => option}
        renderOption={(option) => <ThemeOptions theme={option as ThemeTypes} />}
        disableClearable
        onChange={SelectTheme}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("general.ui.search.theme")}
            classes={{ root: classes.input }}
          />
        )}
      />
    )
  );
};

export default SearchTheme;

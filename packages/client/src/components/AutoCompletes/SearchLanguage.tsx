import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { AvailableLanguages } from "../../i18n";
import TextField from "@material-ui/core/TextField/TextField";
import { useTranslation } from "react-i18next";

const SearchLanguage = () => {
  const { t, i18n } = useTranslation();

  const SelectLanguage = (_e: Object, value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Autocomplete
      id="settings-language"
      options={AvailableLanguages}
      value={i18n.language}
      disableClearable
      onChange={SelectLanguage}
      getOptionLabel={(option) => t(`general.languages.${option}`)}
      renderInput={(params) => (
        <TextField {...params} label={t("general.ui.search.languages")} />
      )}
    />
  );
};

export default SearchLanguage;

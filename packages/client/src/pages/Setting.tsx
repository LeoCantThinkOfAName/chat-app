import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import React from "react";
import { useTranslation } from "react-i18next";

import PageTitle from "../components/PageTitle";
import { useDarkMode } from "../hooks/useDarkMode";
import { SearchLanguage, SearchTheme } from "../components/AutoCompletes";

const Setting = () => {
  const { t } = useTranslation();
  const { mode, setMode } = useDarkMode();

  return (
    <Box p={2}>
      <PageTitle>{t("general.title.page.settings")}</PageTitle>
      <Box py={2}>
        <SearchLanguage />
      </Box>
      <Box py={2}>
        <FormControlLabel
          control={
            <Switch
              checked={mode === "light" ? false : true}
              name="dark-mode"
              color="primary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMode(e.target.checked ? "dark" : "light")
              }
              inputProps={{ "aria-label": t("general.ui.switch.darkMode") }}
            />
          }
          label={t("general.ui.switch.darkMode")}
        />
      </Box>
      <Box py={2}>
        <SearchTheme />
      </Box>
    </Box>
  );
};

export default Setting;

import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useGlobalStyles } from "../Theme";
import { useTranslation } from "react-i18next";

const Home = () => {
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();

  return (
    <Box
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box className={globalClasses.emptyPagePlaceholder}>
        <Typography component="p" variant="caption">
          {t("general.placeholder.page.home")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Box from "@material-ui/core/Box";
import { ThemeTypes, AppThemes } from "../../Theme";

interface Props {
  theme: ThemeTypes;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: "center",
      display: "flex",
      padding: "10px 15px",
      height: "100%",
      width: "100%",
      textDecoration: "none",
      color: "inherit",
    },
    block: {
      height: theme.spacing(3),
      width: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
  })
);

const ThemeOptions: React.FC<Props> = ({ theme }) => {
  const classes = useStyles();
  const themeKey = AppThemes[theme];

  return themeKey ? (
    <Box className={classes.root}>
      <Box className={classes.block} bgcolor={themeKey.main} />
      <Typography component="p">{theme}</Typography>
    </Box>
  ) : null;
};

export default ThemeOptions;

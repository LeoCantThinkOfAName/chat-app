import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';

import { useAppContext } from '../../hooks/useAppContext';
import { useTranslation } from 'react-i18next';

const DarkModeSwitch = () => {
  const {t} = useTranslation();
  const {mode, setMode} = useAppContext();

  return (
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
  )
}

export default DarkModeSwitch

import { User } from '@chat-app/shared';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { UserStatus } from '../../../../shared/src/User';
import { initValue, UserContext } from '../../context/UserContext';
import { app } from '../../feathersClient';
import { useRest } from '../../hooks';
import { UserStatusColorScheme } from '../../Theme';
import StatusAvatar from '../StatusAvatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(0.6),
      minWidth: "auto",
      marginRight: 0,
      borderRadius: "50%",
    },
  })
);

const UserAvatar = () => {
  const {t} = useTranslation();
  const classes = useStyles();
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const {user, setUser, setToken} = useContext(UserContext);
  const [fetchData, setRequest] = useRest<User>();

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleClose = (e: React.MouseEvent<EventTarget>) => {
    if (
      avatarRef.current &&
      avatarRef.current.contains(e.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = (e: React.MouseEvent<EventTarget>, status: UserStatus) => {
    handleClose(e);
    setRequest({
      service: "users",
      method: "patch",
      data: { status },
      id: user.id
    })
  }

  const handleLogout = () => {
    app.logout();
    setUser(initValue.user);
    setToken("");
  }

  useEffect(() => {
    if(fetchData.data && fetchData.data.status !== user.status) {
      setUser({
        ...user, status: fetchData.data.status
      })
    }
  }, [fetchData, setUser, user])

  return (
    <React.Fragment>
      <Button ref={avatarRef} onClick={handleClick} className={classes.button}>
        <StatusAvatar name={user.name[0]} status={user.status} />
      </Button>
      <Popper
        open={open}
        anchorEl={avatarRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={true}
                  id="user-status-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {Object.keys(UserStatusColorScheme).map((key: string) => (
                    <MenuItem key={key} onClick={(e) => handleSelect(e, key as UserStatus)}>
                      <Box height={15} width={15} bgcolor={UserStatusColorScheme[key as UserStatus]} borderRadius="50%" mr={1}/>{t(`general.user.status.${key}`)}
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleLogout}>
                    <Box height={15} width={15} bgcolor="red" borderRadius="50%" mr={1}/>
                    {t(`general.user.logout`)}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default UserAvatar;

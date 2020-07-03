import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import StatusAvatar from "../StatusAvatar";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
      minWidth: "auto",
      marginRight: 0,
      borderRadius: "50%",
    },
  })
);

const UserAvatar = () => {
  const classes = useStyles();
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      avatarRef.current &&
      avatarRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Button ref={avatarRef} onClick={handleClick} className={classes.button}>
        <StatusAvatar name="U" status="online" />
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
                  <MenuItem onClick={handleClose}>Online</MenuItem>
                  <MenuItem onClick={handleClose}>Offline</MenuItem>
                  <MenuItem onClick={handleClose}>Afk</MenuItem>
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

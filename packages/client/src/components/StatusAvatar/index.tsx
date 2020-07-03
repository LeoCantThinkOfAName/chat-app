import React from "react";
import Avatar from "@material-ui/core/Avatar";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
  name: string;
  thumbnail?: string | null;
  status?: "online" | "offline" | "afk" | null;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(2),
      position: "relative",
      overflow: "visible",
    },
    status: {
      "&::after": {
        content: "''",
        display: "block",
        position: "absolute",
        height: "calc(100% + 8px)",
        width: "calc(100% + 8px)",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: "50%",
      },
    },
    online: {
      "&::after": {
        borderColor: theme.palette.success.main,
      },
    },
    offline: {
      "&::after": {
        borderColor: theme.palette.divider,
      },
    },
    afk: {
      "&::after": {
        borderColor: theme.palette.warning.main,
      },
    },
  })
);

const StatusAvatar: React.FC<Props> = ({ name, thumbnail, status }) => {
  const classes = useStyles();

  return (
    <Avatar
      alt={name}
      className={clsx(
        classes.avatar,
        status && classes.status,
        status && classes[status]
      )}
      src={thumbnail ? thumbnail : undefined}
    >
      {name && name[0]}
    </Avatar>
  );
};

export default StatusAvatar;

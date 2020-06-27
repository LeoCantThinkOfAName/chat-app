import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Props {
  to: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: "inherit",
      textDecoration: "none"
    }
  }),
);

const GenericLink: React.FC<Props> = ({children, to}) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  )
}

export default GenericLink

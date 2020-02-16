import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function HeadingWidget(props: { children: ReactNode }) {
  const classes = makeStyles(theme => ({
    heading: {
      marginTop: theme.spacing(2),
      userSelect: 'none',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }))();

  return (
    <Typography component="h1" variant="body1" className={classes.heading}>
      {props.children}
    </Typography>
  );
}

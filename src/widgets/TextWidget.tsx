import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ReactNode } from 'react';

export default function TextWidget(props: { children: ReactNode }) {
  const classes = makeStyles(theme => ({
    text: {
      userSelect: 'none',
      marginTop: theme.spacing(1),
      textAlign: 'center'
    }
  }))();
  return (
    <Typography component="h1" variant="body2" className={classes.text}>
      {props.children}
    </Typography>
  );
}

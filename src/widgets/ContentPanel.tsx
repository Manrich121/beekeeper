import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import CopyrightWidget from './CopyrightWidget';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';

export default function ContentPanel(props: { children: ReactNode }) {
  const classes = makeStyles(theme => ({
    contentPanel: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    icon: {
      height: 40,
      width: 40
    }
  }))();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid item xs={12} md={6} component={Paper} elevation={6} square className={classes.contentPanel}>
      <Box mt={matches ? 5 : 3} className={classes.content}>
        <img alt="icon" src={'honeycombs.png'} className={classes.icon} />
        {props.children}
      </Box>
      <CopyrightWidget />
    </Grid>
  );
}

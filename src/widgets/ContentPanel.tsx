import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import CopyrightWidget from './CopyrightWidget';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box, Typography } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ButtonWidget from './ButtonWidget';

export default function ContentPanel(props: { slot1: ReactNode; slot2?: ReactNode }) {
  const classes = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    bar: {
      backgroundColor: theme.palette.secondary.main
    },
    toolbar: {
      '.MuiToolbar-gutters': {
        paddingLeft: 16,
        paddingRight: 16
      }
    },
    navTitle: { flexGrow: 1, userSelect: 'none' },
    button: {
      backgroundColor: theme.palette.primary.light,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    contentPanel: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    icon: {
      height: 40,
      width: 40,
      marginRight: 8
    }
  }))();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const getSlot2 = (): JSX.Element | null => {
    if (props.slot2) {
      return <Box mt={4}>{props.slot2}</Box>;
    }
    return null;
  };

  return (
    <Grid item xs={12} md={6} component={Paper} elevation={6} square className={classes.contentPanel}>
      <Box className={classes.paper} marginX={matches ? 10 : 5}>
        <Box mt={matches ? 4 : 3} className={classes.content}>
          <AppBar position="static" className={classes.bar}>
            <Toolbar className={classes.toolbar}>
              <img alt="icon" src={'honeycombs.png'} className={classes.icon} />
              <Typography variant="subtitle1" className={classes.navTitle}>
                Join our Beekeeping Forum: A knowledge networking revolution
              </Typography>
              <ButtonWidget
                className={classes.button}
                color="primary"
                fullwidth={false}
                href="https://forum.beekeeper.co.za">
                Go to forum
              </ButtonWidget>
            </Toolbar>
          </AppBar>
          {props.slot1}
        </Box>
        {getSlot2()}
      </Box>
      <CopyrightWidget smallScreen={!matches} />
    </Grid>
  );
}

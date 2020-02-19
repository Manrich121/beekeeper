import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function QuoteWidget(props: { largeScreen: boolean }) {
  const classes = makeStyles(theme => ({
    paper: {
      opacity: 0.9,
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: `calc(100% - 2* ${theme.spacing(4)}px)`
      }
    },
    quote: {
      margin: theme.spacing(1, 2),
      color: theme.palette.text.primary,
      textAlign: 'center',
      userSelect: 'none'
    }
  }))();
  return (
    <Box marginX={props.largeScreen ? 4 : 2} marginY={2} component={Paper} className={classes.paper}>
      <Typography component={'h5'} variant={props.largeScreen ? 'body2' : 'caption'} className={classes.quote}>
        "Beekeepers need to know when to best move their hives to take advantage of a particular forage source depending
        on whether they wish to focus on honey production or strengthening their colonies." <br />-
        <b>Dr. Tlou Samuel Masehela</b>
      </Typography>
    </Box>
  );
}

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function CopyrightWidget(props: { smallScreen: boolean }) {
  const classes = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: props.smallScreen ? 'column' : 'row',
      alignItems: 'center'
    }
  }))();

  return (
    <Box marginY={4} className={classes.container}>
      <Typography variant="body2" color="textSecondary" align="center" style={{ userSelect: 'none' }}>
        {'Copyright © '}
        <Link color="inherit" href="mailto:riaan@beekeeper.co.za" target="_blank">
          Beekeeping SA(Pty)Ltd
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

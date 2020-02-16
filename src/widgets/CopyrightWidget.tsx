import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from 'react';
import { Box } from '@material-ui/core';

export default function CopyrightWidget() {
  return (
    <Box marginY={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="beekeeper.co.za/">
          Beekeeper.co.za
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

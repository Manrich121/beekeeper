import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StayInTouchForm from './widgets/StayInTouchForm';
import CalendarDescription from './widgets/CalendarDescription';
import ContentPanel from './widgets/ContentPanel';
import DownloadWidget from './widgets/DownloadWidget';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url("cover2.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    userSelect: 'none',
    fontWeight: 900,
    color: theme.palette.text.hint,
    letterSpacing: 2
  },
  subtitle: {
    color: theme.palette.text.hint,
    fontWeight: 500,
    textTransform: 'uppercase',
    userSelect: 'none'
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container component="main" className={classes.root} direction={'row'}>
      <CssBaseline />
      <Grid item xs={12} md={6} className={classes.image}>
        <Box className={classes.paper} marginY={matches ? 10 : 5}>
          <Typography component={'h1'} variant={matches ? 'h2' : 'h4'} className={classes.title}>
            BEEKEEPING
          </Typography>
          <Typography component={'h2'} variant={'h5'} className={classes.subtitle}>
            In South Africa
          </Typography>
        </Box>
      </Grid>
      {/*<ContentPanel slot1={<CalendarDescription />} slot2={<StayInTouchForm />} />*/}
      <ContentPanel slot1={<DownloadWidget />} slot2={<StayInTouchForm />} />
    </Grid>
  );
}

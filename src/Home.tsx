import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StayInTouchForm from './widgets/StayInTouchForm';
import CalendarDescription from './widgets/CalendarDescription';
import ContentPanel from './widgets/ContentPanel';
import DownloadWidget from './widgets/DownloadWidget';
import { CalendarManifest } from './App';
import QuoteWidget from './widgets/QuoteWidget';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative'
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'url("https://source.unsplash.com/ylHc_HR-MQQ/800x1200")',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("https://source.unsplash.com/ylHc_HR-MQQ/800x600")'
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    borderRadius: 3
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

export default function Home(props: { manifest: CalendarManifest | null }) {
  const [province, setProvince] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container component="main" className={classes.root} direction={'row'}>
      <CssBaseline />
      <Grid item xs={12} md={6} className={classes.image}>
        <Box marginX={2}>
          <img alt={'logo'} src={'bee_logo.png'} className={classes.logo} />
        </Box>
        <QuoteWidget largeScreen={matches} breakpoint={useMediaQuery(theme.breakpoints.up('md'))} />
      </Grid>
      <ContentPanel
        slot1={<CalendarDescription />}
        slot2={
          <>
            <DownloadWidget
              manifest={props.manifest}
              province={province}
              onProvinceChange={selected => {
                setProvince(selected);
              }}
            />
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfTUaSMZXEhqwn5WftAXgNS278p97sTyclMrJ8Tb8bqQjMs3Q/viewform?embedded=true"
              width={theme.spacing(60)}
              height={600}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}>
              Loading…
            </iframe>
            {/*<StayInTouchForm province={province}*/}
          </>
        }
      />
    </Grid>
  );
}

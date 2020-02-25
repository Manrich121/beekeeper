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
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';

const IMAGE_URL = 'https://source.unsplash.com/ylHc_HR-MQQ';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    userSelect: 'none'
  },
  image: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    '& img': {
      minHeight: '100%'
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoContainer: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    },
    opacity: 0.99
  },
  title: {
    fontFamily: 'Bahnschrift Regular',
    fontWeight: 500,
    textAlign: 'center',
    userSelect: 'none',
    color: theme.palette.text.hint,
    lineHeight: 1.1
  }
}));

const Year = styled.span<{ fontSize: string }>`
  font-size: ${p => p.fontSize};
`;

export default function Home(props: { manifest: CalendarManifest | null }) {
  const [province, setProvince] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container component="main" className={classes.root} direction={'row'}>
      <CssBaseline />
      <Grid item xs={12} md={6} className={classes.leftPanel}>
        <div className={classes.imageContainer}>
          <a
            href={`${IMAGE_URL}/800x1600`}
            onClick={event => event.preventDefault()}
            data-srcset={`${IMAGE_URL}/800x600 800w, ${IMAGE_URL}/800x1600 1200w`}
            data-sizes="100vw"
            className={'progressive replace ' + classes.image}>
            <img src={'cover_80x160.jpeg'} className={'preview ' + classes.image} alt="cover" />
          </a>
        </div>
        <Box mt={2} marginX={2} className={classes.logoContainer}>
          <Typography component={'h1'} variant={matches ? 'h4' : 'h6'} className={classes.title}>
            The SOUTH AFRICAN <Year fontSize={matches ? '64px' : '32px'}>2020</Year> <br />
            BEEKEEPING FORAGE CALENDAR
          </Typography>
        </Box>
        <QuoteWidget largeScreen={matches} />
      </Grid>
      <ContentPanel
        slot1={
          <>
            <CalendarDescription />
            <DownloadWidget
              manifest={props.manifest}
              province={province}
              onProvinceChange={selected => {
                setProvince(selected);
              }}
            />
          </>
        }
        slot2={<StayInTouchForm province={province} />}
      />
    </Grid>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.beekeeper.co.za/">
        Beekeeper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url("cover2.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'left'
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    height: 40
  },
  subtext: {
    marginTop: theme.spacing(2),
    userSelect: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    userSelect: 'none',
    marginTop: theme.spacing(1),
    textAlign: 'center'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: theme.spacing(1, 8),
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.text.hint,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#E6BC33'
    }
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

export default function StayInTouch() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleSubmit = (event: any) => {
    console.log('event', event);
  };
  return (
    <Grid container component="main" className={classes.root} direction={'row'}>
      <CssBaseline />
      <Grid item xs={12} md={7} className={classes.image}>
        <Box className={classes.paper} mt={10}>
          <Typography component={'h1'} variant={matches ? 'h2' : 'h4'} className={classes.title}>
            BEEKEEPING
          </Typography>
          <Typography component={'h2'} variant={'h5'} className={classes.subtitle}>
            In South Africa
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="icon" src={'honeycombs.png'} className={classes.icon} />
          <Grid container md={12} alignContent={'center'} justify={'center'} direction={'column'}>
            <Typography component="h1" variant="body1" className={classes.subtext}>
              The South African Beekeeping Calender.
            </Typography>
            <Typography component="h1" variant="body2" className={classes.text}>
              <b>-Optimising your Beekeeping potential-</b> <br />
              Are you familiar with the seasonal forage opportunities in your area? Get a sense of the traditional and
              changing migratory patterns our beekeepers employ to stay ahead of the nectar flow windows. <br /> <br />
              <b>How does it work?</b> <br />
              The Beekeeping calendar is a free tool updated annually, to reflect current and changing forage patterns
              pursued by beekeepers in their quest to optimize the production potential of their colonies.
              <br /> <br />
              <b>How much does it cost?</b> <br />
              Absolutely and always free. The calender is made possible by direct input from our beekeeping industry.
            </Typography>
          </Grid>
          <Button type="button" variant="contained" color="primary" className={classes.button}>
            Download Calendar
          </Button>
          <Box mt={2} />
          <Grid container md={12} alignContent={'center'} justify={'center'} direction={'column'}>
            <Typography component="h1" variant="body1" className={classes.subtext}>
              Stay updated
            </Typography>
            <Typography component="h1" variant="body2" className={classes.text}>
              Complete your contact details to receive regular updates via email from the beekeeping community.
            </Typography>
          </Grid>
          <form className={classes.form}>
            <TextField variant="outlined" margin="normal" required id="name" label="Name" name="name" size={'small'} />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              type={'email'}
              label="Email Address"
              name="email"
              size={'small'}
            />
            <div className={classes.center}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}>
                Submit details
              </Button>
            </div>
          </form>
          <Box mt={4}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

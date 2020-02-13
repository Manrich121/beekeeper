import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    margin: theme.spacing(8, 4),
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
    fontWeight: 'bold'
  },
  text: {
    userSelect: 'none',
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  content: {
    margin: theme.spacing(0, 5)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  submit: {
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.text.hint,
    fontWeight: 600
  },
  title: {
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
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

  return (
    <Grid container component="main" className={classes.root} direction={'row'}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} className={classes.image}>
        <Box className={classes.paper} mt={10}>
          <Typography component={'h1'} variant={'h2'} className={classes.title}>
            BEEKEEPING
          </Typography>
          <Typography component={'h2'} variant={'h5'} className={classes.subtitle}>
            In South Africa
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="icon" src={'honeycombs.png'} className={classes.icon} />
          <Grid container md={10} alignContent={'center'} justify={'center'} className={classes.content}>
            <Typography component="h1" variant="body1" className={classes.subtext}>
              Beekeeper Calendar
            </Typography>
            <Typography component="h1" variant="body2" className={classes.text}>
              The Beekeeper Calendar for South Africans is your guide to seasonal changes affecting your swarms.
            </Typography>
          </Grid>
          <Button type="submit" variant="contained" color="primary" className={classes.submit}>
            Download Calendar
          </Button>
          <Box mt={3} />
          <Grid container md={10} alignContent={'center'} justify={'center'} className={classes.content}>
            <Typography component="h1" variant="body1" className={classes.subtext}>
              Stay updated
            </Typography>
            <Typography component="h1" variant="body2" className={classes.text}>
              Complete your contact details to receive regular updates via email from the beekeeping community.
            </Typography>
          </Grid>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              type={'email'}
              label="Email Address"
              name="email"
              autoFocus
            />
            <Button type="submit" variant="contained" color="primary" className={classes.submit}>
              Submit details
            </Button>
          </form>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

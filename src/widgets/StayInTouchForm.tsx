import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonWidget from './ButtonWidget';
import HeadingWidget from './HeadingWidget';
import TextWidget from './TextWidget';
import Grid from '@material-ui/core/Grid';

const Bearer = require('@bearer/node')(process.env.REACT_APP_BEARER_API_KEY);
const spreadsheetId = process.env.REACT_APP_SHEET_ID;
const authToken = process.env.REACT_APP_GOOGLE_AUTH_ID;
const gsheet = Bearer.integration('google_sheets');

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export default function StayInTouchForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    gsheet
      .auth(authToken)
      .post(`${spreadsheetId}/values/A1:append`, {
        body: { values: [[fullname, email]] },
        query: { valueInputOption: 'RAW' }
      })
      .then(() => {
        console.log('Saved!');
        setEmail('');
        setFullname('');
      });
  };

  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <HeadingWidget>Stay updated</HeadingWidget>
      <TextWidget>
        Complete your contact details to receive regular updates via email from the beekeeping community.
      </TextWidget>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth={true}
          margin="normal"
          required
          id="fullname"
          label="Name and surname"
          name="fullname"
          size={'small'}
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth={true}
          required
          id="email"
          type={'email'}
          label="Email Address"
          name="email"
          size={'small'}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <ButtonWidget label={'Submit details'} type="submit" color={'primary'} />
      </form>
    </Grid>
  );
}

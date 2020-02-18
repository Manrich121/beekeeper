import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonWidget from './ButtonWidget';
import HeadingWidget from './HeadingWidget';
import TextWidget from './TextWidget';
import Grid from '@material-ui/core/Grid';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

enum FORM_FIELD {
  FULLNAME = 'entry.2005620554',
  EMAIL = 'entry.1045781291',
  PROVINCE = 'entry.1586434264'
}

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfTUaSMZXEhqwn5WftAXgNS278p97sTyclMrJ8Tb8bqQjMs3Q/formResponse';

export default function StayInTouchForm(props: { province: string }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const nameInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const emailInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  const blurInputs = () => {
    if (nameInputRef.current) {
      nameInputRef.current.blur();
    }
    if (emailInputRef.current) {
      emailInputRef.current.blur();
    }
  };

  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <iframe
        title={'submitted'}
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={event => {
          if (submitted) {
            console.log('Submitted');
            setOpen(true);
            blurInputs();
          }
        }}
      />
      <HeadingWidget>Stay updated</HeadingWidget>
      <TextWidget>
        Complete your contact details to receive regular updates via email from the beekeeping community.
      </TextWidget>
      <form
        className={classes.form}
        action={FORM_URL}
        method={'post'}
        target={'hidden_iframe'}
        onSubmit={event => {
          setSubmitted(true);
          setTimeout(() => {
            setEmail('');
            setFullname('');
          }, 200);
        }}>
        <TextField
          inputProps={nameInputRef}
          variant="outlined"
          fullWidth={true}
          margin="normal"
          required
          id="fullname"
          label="Name and surname"
          name={FORM_FIELD.FULLNAME}
          size={'small'}
          value={fullname}
          onChange={e => setFullname(e.target.value)}
          onFocus={event => setSubmitted(false)}
        />
        <TextField
          inputRef={emailInputRef}
          variant="outlined"
          margin="normal"
          fullWidth={true}
          required
          id="email"
          type={'email'}
          label="Email Address"
          name={FORM_FIELD.EMAIL}
          size={'small'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={event => setSubmitted(false)}
        />
        <input
          type={'text'}
          value={props.province || 'n/a'}
          name={FORM_FIELD.PROVINCE}
          onChange={e => null}
          style={{ display: 'none' }}
          tabIndex={-1}
        />
        <ButtonWidget label={'Submit details'} type="submit" color={'primary'} />
        <Snackbar open={open} autoHideDuration={6000} onClose={event => setOpen(false)}>
          <Alert severity="success" onClose={event => setOpen(false)}>
            Thank your for submitting your details
          </Alert>
        </Snackbar>
      </form>
    </Grid>
  );
}

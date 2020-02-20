import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function TextFieldWidget(props: TextFieldProps) {
  const classes = makeStyles(theme => ({
    textLabel: {
      textShadow: `1px 1px 1px rgba(0,0,0,0.2)`
    }
  }))();

  return (
    <TextField
      {...props}
      variant="outlined"
      fullWidth={true}
      margin="normal"
      size={'small'}
      InputLabelProps={{
        classes: {
          shrink: classes.textLabel
        }
      }}
    />
  );
}

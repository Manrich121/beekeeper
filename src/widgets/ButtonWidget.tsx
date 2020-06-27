import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import React, { ReactNode } from 'react';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'uppercase',
    margin: theme.spacing(2, 0, 2),
    color: theme.palette.text.hint,
    fontWeight: 600,
    maxWidth: theme.spacing(25),
    '&:hover': {
      backgroundColor: '#E6BC33'
    },
    textAlign: 'center'
  },
  buttonlabel: {
    textShadow: `1px 1px 1px rgba(0,0,0,0.2)`
  }
}));

export interface ButtonWidgetProps extends ButtonProps {
  label?: string;
  children?: ReactNode;
  fullwidth?: boolean;
}

export default function ButtonWidget(props: ButtonWidgetProps) {
  const classes = useStyles();
  return (
    <Button
      {...props}
      variant="contained"
      color={props.color || 'primary'}
      fullWidth={props.fullwidth ?? true}
      className={classes.button}
      classes={props.disabled ? {} : { label: classes.buttonlabel }}>
      {props.label}
      {props.children}
    </Button>
  );
}

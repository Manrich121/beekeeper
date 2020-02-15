import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.text.hint,
    fontWeight: 600,
    maxWidth: theme.spacing(25),
    '&:hover': {
      backgroundColor: '#E6BC33'
    }
  }
}));

export interface ButtonWidgetProps extends ButtonProps {
  label?: string;
}

export default function ButtonWidget(props: ButtonWidgetProps) {
  const classes = useStyles();
  return (
    <Button type={props.type} variant="contained" color={props.color} fullWidth={true} className={classes.button}>
      {props.label}
    </Button>
  );
}

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import HeadingWidget from './HeadingWidget';
import ButtonWidget from './ButtonWidget';

enum PROVINCES {
  EASTERN_CAPE = 'eastern cape',
  FREESTATE = 'freestate',
  GAUTENG = 'gauteng',
  KZN = 'kzn',
  LIMPOPO = 'limpopo',
  MPUMALANGA = 'mpumalanga',
  NORTHERN_CAPE = 'northern cape',
  NORTH_WEST = 'north west',
  WESTERN_CAPE = 'western cape'
}

const BASE_PATH = '/calendars';
const FILE_NAME_PART = 'Beekeeping Forage Calendar 2020.pdf';

export default function DownloadWidget() {
  const [provence, setProvence] = useState('');
  const classes = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    button: {
      width: '100%',
      height: '100%'
    }
  }))();

  const getOptions = (): JSX.Element[] => {
    return Object.values(PROVINCES).map(p => {
      return (
        <MenuItem key={p} value={p}>
          {p.toUpperCase()}
        </MenuItem>
      );
    });
  };

  const resolveFilePath = (): string => {
    return `${BASE_PATH}/${provence.toUpperCase()} ${FILE_NAME_PART}`;
  };

  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <HeadingWidget>Select your provence</HeadingWidget>
      <FormControl className={classes.formControl}>
        <InputLabel id="provence-select-label">Provence</InputLabel>
        <Select
          labelId="provence"
          id="provence-select"
          required={true}
          value={provence}
          onChange={e => setProvence(e.target.value as string)}>
          {getOptions()}
        </Select>
      </FormControl>
      {provence && (
        <ButtonWidget color={'primary'} label={'Download Calendar'}>
          <a href={resolveFilePath()} download className={classes.button} style={{ position: 'absolute' }} />
        </ButtonWidget>
      )}
    </Grid>
  );
}

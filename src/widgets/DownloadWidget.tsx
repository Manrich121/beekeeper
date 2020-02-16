import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import HeadingWidget from './HeadingWidget';
import ButtonWidget from './ButtonWidget';
import { BASE_CALENDARS_PATH, CalendarManifest } from '../App';

export default function DownloadWidget(props: {
  manifest: CalendarManifest | null;
  provence: string;
  onProvenceChange: (selected: string) => void;
}) {
  const classes = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
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

  const getOptions = (): JSX.Element[] | null => {
    if (!props.manifest) {
      return null;
    }
    return props.manifest.calendars.map(p => {
      return (
        <MenuItem key={p.name} value={p.name}>
          {p.name.toUpperCase()}
        </MenuItem>
      );
    });
  };

  const resolveFilePath = (): string => {
    if (!props.manifest) {
      return '';
    }
    const prov = props.manifest.calendars.find(c => c.name == props.provence);
    return prov ? `${BASE_CALENDARS_PATH}/${prov.file}` : '';
  };

  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <FormControl className={classes.formControl}>
        <InputLabel id="provence-select-label">Select Provence</InputLabel>
        <Select
          labelId="provence"
          id="provence-select"
          required={true}
          value={props.provence}
          onChange={e => props.onProvenceChange(e.target.value as string)}>
          {getOptions()}
        </Select>
      </FormControl>
      <ButtonWidget color={'primary'} label={'Download Calendar'} disabled={!(props.manifest && props.provence)}>
        <a href={resolveFilePath()} download className={classes.button} style={{ position: 'absolute' }} />
      </ButtonWidget>
    </Grid>
  );
}
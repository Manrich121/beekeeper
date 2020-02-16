import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonWidget from './ButtonWidget';
import { BASE_CALENDARS_PATH, CalendarManifest } from '../App';

export default function DownloadWidget(props: {
  manifest: CalendarManifest | null;
  province: string;
  onProvinceChange: (selected: string) => void;
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
    const prov = props.manifest.calendars.find(c => c.name === props.province);
    return prov ? `${BASE_CALENDARS_PATH}/${prov.file}` : '';
  };

  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <FormControl className={classes.formControl}>
        <InputLabel id="province-select-label">Select Province</InputLabel>
        <Select
          labelId="province"
          id="province-select"
          required={true}
          value={props.province}
          onChange={e => props.onProvinceChange(e.target.value as string)}>
          {getOptions()}
        </Select>
      </FormControl>
      <ButtonWidget
        color={'primary'}
        label={'Download Calendar'}
        disabled={!(props.manifest && props.province)}
        style={{ alignSelf: 'center' }}>
        <a href={resolveFilePath()} download className={classes.button} style={{ position: 'absolute' }} />
      </ButtonWidget>
    </Grid>
  );
}

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonWidget from './ButtonWidget';
import { BASE_CALENDAR_URL, CalendarManifest } from '../App';
import { showFile } from '../utils';

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

  const resolveFileName = (): string => {
    if (!props.manifest) {
      return 'MANIFEST_NOT_LOADED';
    }
    const prov = props.manifest.calendars.find(c => c.name === props.province);
    return prov ? `${prov.file}` : 'NOT_FOUND';
  };

  const handleClick = () => {
    const filename = resolveFileName();
    fetch(`${BASE_CALENDAR_URL}/${filename}`, {})
      .then(r => r.blob())
      .then(blob => showFile(blob, { outputFileName: filename }));
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
        style={{ alignSelf: 'center' }}
        onClick={handleClick}
      />
    </Grid>
  );
}

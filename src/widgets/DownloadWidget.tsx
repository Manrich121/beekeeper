import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonWidget from './ButtonWidget';
import { BASE_CALENDAR_URL, CalendarManifest } from '../App';
import { showFile } from '../utils';
import { yellow } from '@material-ui/core/colors';

export default function DownloadWidget(props: {
  manifest: CalendarManifest | null;
  province: string;
  onProvinceChange: (selected: string) => void;
}) {
  const [loading, setLoading] = React.useState(false);
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
    },
    buttonProgress: {
      color: yellow[600],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
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

  const handleClick = async () => {
    if (loading) {
      return;
    }
    const filename = resolveFileName();
    setLoading(true);
    const response = await fetch(`${BASE_CALENDAR_URL}/${filename}`, {});
    const blob = await response.blob();
    await showFile(blob, { outputFileName: filename });
    setLoading(false);
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
        disabled={!(props.manifest && props.province) || loading}
        style={{ alignSelf: 'center' }}
        onClick={handleClick}>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </ButtonWidget>
    </Grid>
  );
}

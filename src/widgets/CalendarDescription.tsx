import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextWidget from './TextWidget';
import HeadingWidget from './HeadingWidget';

export default function CalendarDescription() {
  return (
    <Grid container alignContent={'center'} justify={'center'} direction={'column'}>
      <HeadingWidget>The South African Beeforage Calender</HeadingWidget>
      <TextWidget>
        <b>-Optimising your Beekeeping potential-</b> <br />
        Are you familiar with the seasonal forage opportunities in your area? Get a sense of the traditional and
        changing migratory patterns our beekeepers employ to stay ahead of the nectar flow windows. <br /> <br />
        <b>How much does it cost?</b> <br />
        Absolutely and always free. The calender is made possible by direct input from our beekeeping industry.
      </TextWidget>
    </Grid>
  );
}

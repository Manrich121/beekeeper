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
        <b>How does it work?</b> <br />
        The Beekeeping calendar is a free tool updated annually, to reflect current and changing forage patterns pursued
        by beekeepers in their quest to optimize the production potential of their colonies.
      </TextWidget>
    </Grid>
  );
}

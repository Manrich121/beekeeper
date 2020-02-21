import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Home from './Home';
import './styles/_index.css';
import { getJSON } from './utils';

const CDN_URL = process.env.REACT_APP_CDN_URL;
const BASE_CALENDAR_PATH = 'calendars';
export const BASE_CALENDAR_URL = `${CDN_URL}/${BASE_CALENDAR_PATH}`;

export type Calendar = {
  name: string;
  file: string;
  additionalInfo?: {};
};
export type CalendarManifest = {
  name: string;
  calendars: Calendar[];
};

export default function App() {
  let retries = 5;
  const [manifest, setManifest] = useState(null);

  if (manifest == null && retries > 0) {
    getJSON(`${CDN_URL}/manifest.json`, manifestCallback);
  }

  function manifestCallback(err: number, data: any) {
    if (err) {
      //Do something with the error
      console.error('Fetch manifest failed:', err, data);
      retries = retries - 1;
    } else {
      //data  is the json response that you received from the server
      if (data) {
        console.debug('Retrieved manifest: ', data);
        setManifest(data);
      }
    }
  }

  return (
    <Container>
      <Home key={'home'} manifest={manifest} />
    </Container>
  );
}

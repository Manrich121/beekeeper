import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Home from './Home';
import './styles/_index.css';

export const BASE_CALENDARS_PATH = '/calendars';

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
    fetch(`${BASE_CALENDARS_PATH}/manifest.json`)
      .then(response => {
        retries = retries - 1;
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(json => {
        if (json) {
          setManifest(json);
        }
      })
      .catch(function(e) {
        console.log('Fetch manifest failed', e);
      });
  }

  return (
    <Container>
      <Home key={'home'} manifest={manifest} />
    </Container>
  );
}

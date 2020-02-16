import React from 'react';
import Container from '@material-ui/core/Container';
import Home from './Home';
import './styles/_index.css';

export default function App() {
  return (
    <Container>
      <Home key={'home'} />
    </Container>
  );
}

import React from 'react';
import Container from '@material-ui/core/Container';
import StayInTouch from './SignIn';
import './styles/_index.css';

export default function App() {
  return (
    <Container>
      <StayInTouch key={'sign'} />
    </Container>
  );
}

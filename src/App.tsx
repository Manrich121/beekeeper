import React from 'react';
import Container from '@material-ui/core/Container';
import SignInSide from './SignIn';
import './styles/_index.css';

export default function App() {
  return (
    <Container>
      <SignInSide key={'sign'} />
    </Container>
  );
}

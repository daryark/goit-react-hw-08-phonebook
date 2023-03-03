import React from 'react';
import { StyledNavLink } from 'components/App/App.styled';
import { Paper } from '@mui/material';

export default function HomePage() {
  return (
    <Paper sx={{ m: 2, p: 2, textAlign: 'center' }} elevation={3}>
      <p>
        Hello on the HomePage of Phonebook! Here you can register and save your
        contacts and delete if needed.
      </p>
      <p>
        Please
        <StyledNavLink to={'/signin'}> Sign In </StyledNavLink> or
        <StyledNavLink to={'/signup'}> Sign Up </StyledNavLink> to start.
      </p>
    </Paper>
  );
}

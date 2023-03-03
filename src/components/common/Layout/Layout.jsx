import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';

import { Loader } from '../Loader/Loader';

import { Container, Header } from 'components/App/App.styled';
import MediaQuery from 'styles/Root';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <MediaQuery as="nav">
            <h1>
              <NavLink to={'/'}>
                <ContactPhoneRoundedIcon />
                Phonebook
              </NavLink>
            </h1>
            <ul>
              <li>
                <NavLink to={'/contacts'}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to={'/signup'}>Sign Up</NavLink>
              </li>
              <li>
                <NavLink to={'/signin'}>Sign In</NavLink>
              </li>
            </ul>
          </MediaQuery>
        </Container>
      </Header>
      <Container as="main">
        <MediaQuery>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MediaQuery>
      </Container>
    </>
  );
}

import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';

import { Loader } from '../common/Loader/Loader';
import { selectIsLoggedIn, selectUserData } from 'redux/user/selectors';

import MediaQuery from 'styles/Root';
import { Container, Header, StyledNavLink } from 'components/App/App.styled';
import { Logout } from 'components/Logout/Logout';
import { Box } from '@mui/system';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  return (
    <>
      <Header>
        <Container>
          <MediaQuery as="nav">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mx: 3,
                my: 2,
              }}
            >
              <h1>
                <NavLink to={'/'}>
                  <ContactPhoneRoundedIcon />
                  Phonebook
                </NavLink>
              </h1>

              {isLoggedIn ? (
                <>
                  <p>
                    Hello <b>{userData.name}</b>
                  </p>
                  <div>
                    <StyledNavLink to={'/contacts'}>Contacts</StyledNavLink>
                    <Logout />
                  </div>
                </>
              ) : (
                <ul>
                  <li>
                    <StyledNavLink to={'/signup'}>Sign Up</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to={'/signin'}>Sign In</StyledNavLink>
                  </li>
                </ul>
              )}
            </Box>
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

import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaRegAddressBook } from 'react-icons/fa';

import { Loader } from '../Loader/Loader';

import {
  Nav,
  HeaderSection,
  Section,
  NavList,
} from 'components/App/App.styled';
import { Header1 } from 'components/common/Header/Header.styled';

export default function Layout() {
  return (
    <>
      <HeaderSection>
        <Nav as="nav">
          <Header1>
            <NavLink to={'/'}>
              <FaRegAddressBook /> Phonebook
            </NavLink>
          </Header1>
          <NavList>
            <li>
              <NavLink to={'/contacts'}>Contacts</NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to={'/signin'}>Sign In</NavLink>
            </li>
          </NavList>
        </Nav>
      </HeaderSection>
      <Section as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
}

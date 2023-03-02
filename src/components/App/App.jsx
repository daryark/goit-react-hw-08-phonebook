import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/common/Layout/Layout';
import { routes } from 'routes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));

export function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />}></Route>
          <Route path={routes.SIGN_IN} element={<SignInPage />} />
          <Route path={routes.SIGN_UP} element={<SignUpPage />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </>
  );
}

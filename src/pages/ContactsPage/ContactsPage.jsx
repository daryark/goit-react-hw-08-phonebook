import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContactForm,
  ContactList,
  // Container,
  // Header2,
  Loader,
  // Notification,
  Searchbar,
  // Section,
} from 'components';
import { getContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { Typography } from '@mui/material';

export default function ContactsPages() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div>
          <ContactForm />
          <h2>Contacts</h2>
          <Searchbar />

          {!contacts.length && !loading && (
            <Typography variant="h6" component="p" sx={{ color: '#d32f2f' }}>
              You don't have contacts yet, add somebody!
            </Typography>
          )}
          {Boolean(contacts.length) && <ContactList />}
        </div>
      </section>
      {loading && <Loader />}
    </>
  );
}

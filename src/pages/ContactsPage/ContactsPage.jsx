import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ContactForm,
  ContactList,
  Container,
  Header2,
  Loader,
  Notification,
  Searchbar,
  Section,
} from 'components';
import { getContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';

export default function ContactsPages() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <ContactForm />
          {/* <RegisterForm /> */}
          <Header2>Contacts</Header2>
          <Searchbar />

          {!contacts.length && !loading && (
            <Notification>
              You don't have contacts yet, add somebody!
            </Notification>
          )}
          {Boolean(contacts.length) && <ContactList />}
        </Container>
      </Section>
      {loading && <Loader />}
    </>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Typography } from '@mui/material';
import { ContactInfo, ContactItem } from './ContactList.styled';

// import { ContactInfo, ContactItem, DeleteBtn } from './ContactList.styled';
// import { Notification } from 'components/common/Notification/Notification.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleClickDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {Boolean(filteredContacts.length) ? (
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <ContactItem key={id}>
              <div>
                <ContactInfo>{name}</ContactInfo>
                <ContactInfo>{number}</ContactInfo>
              </div>
              <Button
                variant="outlined"
                type="button"
                onClick={() => handleClickDelete(id)}
              >
                <FaRegTrashAlt />
              </Button>
            </ContactItem>
          ))}
        </ul>
      ) : (
        <Typography variant="h5" component="p" sx={{ color: '#d32f2f' }}>
          Sorry, no matches found.
        </Typography>
      )}
    </>
  );
};

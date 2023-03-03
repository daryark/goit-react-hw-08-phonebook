import { useState } from 'react';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  InputLabel,
  OutlinedInput,
  Button,
  InputAdornment,
  FormControl,
} from '@mui/material';
import { AccountCircleRounded, PhoneEnabledRounded } from '@mui/icons-material';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in your contacts! Try to find in search.`);
      return;
    }
    dispatch(addContact({ name, phone: number }));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
        <OutlinedInput
          // {...register('name')}
          id="outlined-adornment-name"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircleRounded />
            </InputAdornment>
          }
          label="Name"
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl sx={{ m: 1, ml: 0, width: '30ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-number">Number</InputLabel>
        <OutlinedInput
          // {...register('number')}
          id="outlined-adornment-number"
          endAdornment={
            <InputAdornment position="end">
              <PhoneEnabledRounded />
            </InputAdornment>
          }
          label="Number"
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <Button sx={{ m: 2, width: '20ch' }} variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
}

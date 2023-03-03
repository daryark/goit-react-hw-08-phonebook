// import { Input, Search } from 'components/common/Input/Input.styled';
import { SearchRounded } from '@mui/icons-material';
import { InputOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from '@mui/material';

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';

export function Searchbar() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(setFilterValue(e.target.value));

  return (
    <>
      <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search">
          Search contact
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          endAdornment={
            <InputAdornment position="end">
              <SearchRounded />
            </InputAdornment>
          }
          label="Search contact"
          type="text"
          name="filter"
          onChange={handleChangeFilter}
          disabled={!contacts.length}
        />
      </FormControl>
    </>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import { logoutUser } from 'redux/user/operations';

export function Logout() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outlined"
      sx={{ mt: 1, display: 'block' }}
    >
      Log Out
    </Button>
  );
}

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormControl,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Box,
} from '@mui/material';
import {
  AccountCircleRounded,
  Email,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

export function RegisterForm({ onSubmit, isSignUpForm = false }) {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      ...(isSignUpForm && { name: yup.string().min(2).max(20).required() }),
      email: yup.string().email().required(),
      password: yup.string().min(7).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerSubmit = data => {
    console.log('errors', errors);
    onSubmit(data);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box
      onSubmit={handleSubmit(registerSubmit)}
      as="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
      }}
    >
      {isSignUpForm ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
      {isSignUpForm && (
        <FormControl
          sx={{ m: 1, ml: 0, width: '30ch', display: 'block' }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
            {...register('name')}
            id="outlined-adornment-name"
            endAdornment={
              <InputAdornment position="end">
                <AccountCircleRounded />
              </InputAdornment>
            }
            label="Name"
          />
        </FormControl>
      )}
      <FormControl
        sx={{ m: 1, ml: 0, width: '30ch', display: 'block' }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          {...register('email')}
          id="outlined-adornment-email"
          endAdornment={
            <InputAdornment position="end">
              <Email />
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControl
        sx={{ m: 1, ml: 0, width: '29.6ch', display: 'block' }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          {...register('password')}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button sx={{ m: 2, width: '15ch' }} type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

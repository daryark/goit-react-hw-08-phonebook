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
    console.log(data);
    onSubmit(data);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(registerSubmit)}>
      {/* <Input /> */}
      {isSignUpForm && (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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

      <Button sx={{ m: 2, width: '10ch' }} type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';

export function RegisterForm({ onSubmit, isSignUpForm = false }) {
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

  return (
    <form onSubmit={handleSubmit(registerSubmit)}>
      {/* <Input /> */}
      {isSignUpForm && (
        <label>
          Name
          <input {...register('name')} />
        </label>
      )}
      <label>
        Email
        <input {...register('email')} />
      </label>
      <label>
        Password
        <input {...register('password')} />
      </label>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}

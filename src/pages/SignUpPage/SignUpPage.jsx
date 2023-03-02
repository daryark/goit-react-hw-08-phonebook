import React from 'react';
import { useDispatch } from 'react-redux';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registerUser } from 'redux/user/operations';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const handleRegister = data => dispatch(registerUser(data));

  return <RegisterForm isSignUpForm="true" onSubmit={handleRegister} />;
}

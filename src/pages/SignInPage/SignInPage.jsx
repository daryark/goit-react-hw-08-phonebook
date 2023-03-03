import React from 'react';
import { useDispatch } from 'react-redux';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { loginUser } from 'redux/user/operations';

export default function SignInPage() {
  const dispatch = useDispatch();
  const handleLogin = data => dispatch(loginUser(data));

  return <RegisterForm onSubmit={handleLogin} />;
}

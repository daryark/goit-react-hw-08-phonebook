import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { registerUser } from 'redux/user/operations';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = data => dispatch(registerUser(data));

  return <RegisterForm isSignUpForm="true" onSubmit={handleRegister} />;
}

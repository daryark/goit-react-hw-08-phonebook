import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { loginUser } from 'redux/user/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function SignInPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleLogin = data => dispatch(loginUser(data));

  return <RegisterForm onSubmit={handleLogin} />;
}

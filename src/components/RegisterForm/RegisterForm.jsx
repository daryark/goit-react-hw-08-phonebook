import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from 'components/common/Input/Input.styled';
import { FormBtn } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { register } from 'redux/user/operations';

export function RegisterForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(formData);
    dispatch(register(formData));
    // e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input ref={nameRef} />
      </label>
      <label>
        Email
        <Input ref={emailRef} />
      </label>
      <label>
        Password
        <Input ref={passwordRef} />
      </label>
      <FormBtn type="submit">Submit</FormBtn>
    </form>
  );
}

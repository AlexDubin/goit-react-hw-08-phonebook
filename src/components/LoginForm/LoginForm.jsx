import { Button, TextField } from '@mui/material';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/operations';
import {
  selectAuthentificated,
  selectUserError,
  selectUserLoading,
} from 'redux/selectors';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = { email, password };

    dispatch(loginUser(userData));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div className={css.form_wrapper}>
      <h1>Login Form</h1>
      {isLoading && !error && <Loader />}
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            margin="normal"
            id="outlined-basic-1"
            label="Email"
            type="email"
            required
            name="userEmail"
            placeholder="Your Email"
          />
        </label>
        <label>
          <TextField
            margin="normal"
            id="outlined-basic-2"
            label="Password"
            type="password"
            required
            minLength={7}
            name="userPassword"
            placeholder="Your Password"
          />
        </label>
        <br />
        <Button variant="contained" sx={{ mt: 2 }} type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

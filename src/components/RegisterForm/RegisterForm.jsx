import Loader from '../Loader/Loader';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/operations';
import {
  selectAuthentificated,
  selectUserError,
  selectUserLoading,
} from 'redux/selectors';
import css from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const authentificated = useSelector(selectAuthentificated);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userData = { name, email, password };

    dispatch(registerUser(userData));
  };

  if (authentificated) {
    navigate('/contacts');
  }

  return (
    <div className={css.form_wrapper}>
      {isLoading && !error && <Loader />}
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            margin="normal"
            id="outlined-basic-1"
            label="User Name"
            type="text"
            required
            name="userName"
          />
        </label>
        <label>
          <TextField
            margin="normal"
            id="outlined-basic-2"
            label="User Email"
            type="email"
            required
            name="userEmail"
          />
        </label>
        <label>
          <TextField
            margin="normal"
            id="outlined-basic-3"
            label="User Password"
            type="password"
            required
            minLength={7}
            name="userPassword"
          />
        </label>
        <br />
        <Button variant="contained" sx={{ mt: 2 }} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

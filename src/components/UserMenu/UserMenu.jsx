import React from 'react';
import { logoutUser } from 'redux/operations';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { selectUserUserData } from 'redux/selectors';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserUserData);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div>
      <h1>User Information:</h1>
      <p>
        <b>User Name:</b> {user.name}
      </p>
      <p>
        <b>User Email:</b> {user.email}
      </p>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;

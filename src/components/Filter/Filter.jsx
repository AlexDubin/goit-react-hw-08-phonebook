import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterName = event => {
    const value = event.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <label htmlFor="findInput">Find contacts by name or number</label>
      <input
        type="text"
        id="findInput"
        placeholder="Search contacts"
        name="filter"
        onChange={filterName}
        required
      />
    </div>
  );
};

export default Filter;

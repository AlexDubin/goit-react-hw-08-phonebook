import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      alert(`This ${name} is all ready exists!`);
    } else {
      const newContact = {
        name: name,
        number: number,
      };

      dispatch(addContact(newContact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const isFormIncomplete = name.trim() === '' || number.trim() === '';

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        id="nameInput"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeName}
        placeholder="Name"
      />
      <label htmlFor={numberInputId}>Telephone</label>
      <input
        type="tel"
        id="numberInput"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeNumber}
        placeholder="Telephone"
      />
      <button className={css.btnadd} type="submit" disabled={isFormIncomplete}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

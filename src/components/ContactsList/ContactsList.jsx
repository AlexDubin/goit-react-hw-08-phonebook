import React from 'react';
import { FaPhone } from 'react-icons/fa';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            <FaPhone /> - {contact.name}: {contact.number}
          </p>
          <button
            className={css.btnx}
            onClick={() => handleDeleteContact(contact.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

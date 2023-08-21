import React from 'react';
import { FaPhone } from 'react-icons/fa';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            <FaPhone /> - {contact.name}: {contact.phone}
          </p>
          <button
            className={css.btnx}
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

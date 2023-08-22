import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import HeroSection from '../components/HeroSection/HeroSection';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectAuthentificated,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import Section from '../components/Section/Section';
import css from '../components/App.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!authentificated) return;

    dispatch(fetchContacts());
  }, [dispatch, authentificated]);

  return (
    <div className={css.phonebook}>
      <HeroSection herotitle="Phonebook">
        <ContactForm />
      </HeroSection>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactsList />
        <div>
          <UserMenu></UserMenu>
        </div>
      </Section>
    </div>
  );
};

export default ContactsPage;

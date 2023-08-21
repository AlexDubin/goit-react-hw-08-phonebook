import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../redux/operations';
import HeroSection from './HeroSection/HeroSection';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <HeroSection herotitle="Phonebook">
        <ContactForm />
      </HeroSection>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <p className={css.noCont}>No saved contacts!</p>
        )}
        {contacts.length > 0 && <ContactsList />}
      </Section>
    </div>
  );
};

export default App;

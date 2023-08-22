import { useSelector, useDispatch } from 'react-redux';
import css from './App.module.css';
import React, { lazy, Suspense, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { selectAuthentificated, selectUserToken } from "redux/selectors";
import { refreshUser } from "redux/operations";

// import { selectContacts } from 'redux/selectors';
// import { fetchContacts } from '../redux/operations';
// import HeroSection from './HeroSection/HeroSection';
// import Section from './Section/Section';
// import ContactsList from './ContactsList/ContactsList';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';


// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.phonebook}>
//       <HeroSection herotitle="Phonebook">
//         <ContactForm />
//       </HeroSection>
//       <Section title="Contacts">
//         {contacts.length > 0 ? (
//           <Filter />
//         ) : (
//           <p className={css.noCont}>No saved contacts!</p>
//         )}
//         {contacts.length > 0 && <ContactsList />}
//       </Section>
//     </div>
//   );
// };

// export default App;





const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if(!token) return;

    dispatch(refreshUser());

  }, [token, dispatch]);

  return(
    <div>
      <header className={css.header}>
        <ul className={css.menu_list}>
          <li><NavLink className={css.menu_item} to="/">Home</NavLink></li>
          {authentificated ? (
            <>
              <li><NavLink className={css.menu_item_contacts} to="/contacts">Contacts</NavLink></li>
            </>
          ) : (
            <div className={css.menu_item_login}>
              <li><NavLink className={css.menu_item} to="/login">Login</NavLink></li>
              <li><NavLink className={css.menu_item} to="/register">Register</NavLink></li>
            </div>
          )}
        </ul>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/contacts" element={<ContactsPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  ); 
};

export default App;

import React from 'react';
import css from '../components/App.module.css';

const HomePage = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <p className={css.descr}>
          Welcome to the home page of the "Phonebook" application! This is a
          convenient and user-friendly web application that will help you manage
          your contacts and keep important phone numbers at your fingertips.
        </p>
        <h2>Key Features:</h2>

        <ul className={css.list}>
          <li>
            <b>Search and Display Contacts:</b> On this page, you will find a
            list of all your contacts sorted in alphabetical order. The search
            function allows you to quickly find the desired contact by name or
            phone number.
          </li>
          <li>
            <b>Add New Contacts:</b> To add a new contact, navigate to the
            "Contacts" page and click the "Add Contact" button. Fill in the
            information about the contact's first name, last name, and phone
            number.
          </li>
          <li>
            <b>Edit and Delete Contacts:</b> You can always edit or delete an
            existing contact. Simply select the contact from the list and use
            the respective options.
          </li>
          <li>
            <b>Grouping Contacts: </b> For more organized management, you can
            create contact groups, such as "Work," "Friends," "Family." This
            will help you find the desired contacts more quickly.
          </li>
          <li>
            <b>Responsive Design:</b> The "Phonebook" application features a
            responsive design, allowing you to use it both on your computer and
            mobile device.
          </li>
        </ul>

        <h2>Getting Started Guide:</h2>

        <ul className={css.list}>
          <li>
            <b>Registration:</b> If you are a new user, you will need to
            register to start using the application. This will help keep your
            contacts secure.
          </li>
          <li>
            <b>Authorization:</b> After registration, use your account to log in
            to the application and start adding and managing contacts.
          </li>
          <li>
            <b>Adding Contacts:</b> Navigate to the "Contacts" page and click
            "Add Contact." Fill in the required fields and save the contact.
          </li>
          <li>
            <b>Search and Editing: </b> Utilize the search function to quickly
            locate contacts. To edit a contact, simply select it and make the
            necessary changes.
          </li>
          <li>
            <b>Favorite Contacts:</b> Mark important contacts as "Favorites" to
            keep them easily accessible.
          </li>
        </ul>
        <p>
          We hope that our "Phonebook" application will make managing your
          contacts easy and convenient. Start using the application now and
          organize your contacts like never before!
        </p>
      </div>
    </section>
  );
};

export default HomePage;

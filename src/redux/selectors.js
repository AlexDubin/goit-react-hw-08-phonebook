import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const filteredContacts = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
export const selectUserUserData = state => state.auth.userData;
export const selectAuthentificated = state => state.auth.authentificated;

export const selectFilteredContacts = createSelector(
  [getContacts, filteredContacts],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => {
      if (contact.name && contact.number) {
        const nameMatches = contact.name
          .toLowerCase()
          .includes(normalizedFilter);
        const numberMatches = contact.number.includes(normalizedFilter);

        return nameMatches || numberMatches;
      }
      return false;
    });
  }
);

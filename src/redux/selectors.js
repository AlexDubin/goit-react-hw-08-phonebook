import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact => {
      if (contact.name && contact.phone) {
        const nameMatches = contact.name
          .toLowerCase()
          .includes(normalizedFilter);
        const phoneMatches = contact.phone.includes(normalizedFilter);

        return nameMatches || phoneMatches;
      }
      return false;
    });
  }
);

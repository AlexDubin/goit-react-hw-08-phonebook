import { createSlice } from '@reduxjs/toolkit';

export const formFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterContacts } = formFilterSlice.actions;
export const formFilterReduser = formFilterSlice.reducer;
